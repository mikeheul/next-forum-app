import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import PostForm from "./_components/PostForm";
import Banner from "@/components/Banner";
import Preview from "@/components/Preview";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";
import LockButton from "./_components/LockButton";
import { UserIcon, Calendar, Lock } from "lucide-react";
import PostCard from "./_components/PostCard";

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

            {topic?.userId === "aaa" && (
                <LockButton 
                    topicId={params.topicId}
                    isLocked={!!topic?.isLocked}
                />
            )}

            <div className="relative p-6 mb-4 rounded-lg border bg-sky-900 text-white border-slate-400">
                {topic?.isLocked && (
                    <Lock 
                        size={25}
                        className="block mb-2 md:absolute top-2 right-2 rounded-md p-[6px] bg-red-500 text-white"
                    />
                )}    
                <div className="flex gap-x-2 text-sm text-slate-300"><UserIcon size={20} /> {topic?.userId}</div> 
                <div className="flex gap-x-2 text-sm text-slate-300"><Calendar size={20} /> {formatDateTime(topic?.createdAt)}</div>
                <div className="my-6">
                    <Preview
                        value={posts[0].message}
                        align
                    />
                </div>
            </div>

            {posts.map((post, index) => (
                index !== 0 ? (
                    <PostCard
                        key={post.id}
                        topic={topic}
                        post={post}
                    />
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