import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import PostForm from "./_components/PostForm";
import Banner from "@/components/Banner";
import Preview from "@/components/Preview";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";
import { cn } from "@/lib/utils"

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
            <div className="p-6 mb-4 rounded-lg bg-amber-200">
                <p>{topic?.userId}</p> 
                <p>{formatDateTime(topic?.createdAt)}</p>
                <Preview
                    value={posts[0].message}
                    isCenter={false}
                />
            </div>

            {posts.map((post, index) => (
                // TODO : PostCard
                index !== 0 ? (
                    <div
                        className="flex flex-col md:flex-row gap-x-2 border border-slate-200 mb-2"
                        key={post.id}  
                    >
                        <div className="flex flex-col justify-center p-6 bg-emerald-700 text-white min-w-[300px]">
                            <p className="text-sm">{post.userId}</p>
                            <p className="text-xs">{formatDateTime(post.createdAt)}</p>
                        </div>
                        <Preview 
                            value={post.message}   
                            isCenter
                        />
                    </div>
                ) : null
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