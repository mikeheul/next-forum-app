import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import PostForm from "./_components/PostForm";
import Banner from "@/components/Banner";
import Preview from "@/components/Preview";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";

const PostsPage = async ({ params }: { params: { topicId: string } }) => {

    const topic = await db.topic.findUnique({
        where: {
            id: params.topicId
        }
    })

    const posts = await db.post.findMany({
        where: {
            topicId: params.topicId
        },
        orderBy: {
            createdAt: 'asc'
        }
    })

    return (
        <div className="p-6">

            <BackButton />

            <TitlePage title={`${topic?.title}`} />

            {posts.map(post => (
                <div
                    className="flex flex-col md:flex-row gap-x-2 border border-slate-200 mb-2"
                    key={post.id}  
                >
                    <div className="p-6 bg-emerald-700 text-white min-w-[300px]">
                        <p className="text-sm">{post.userId}</p>
                        <p className="text-xs">{formatDateTime(post.createdAt)}</p>
                    </div>
                    <Preview 
                        value={post.message}   
                    />
                </div>
            ))}

            {!topic?.isLocked ? (
                <PostForm 
                    topicId={topic?.id}
                />
            ): (
                <Banner 
                    label="This topic is locked!"
                />
            )}
        </div>
    );
}

export default PostsPage;