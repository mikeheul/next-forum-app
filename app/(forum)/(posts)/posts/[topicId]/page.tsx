import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import PostForm from "./_components/PostForm";
import Banner from "@/components/Banner";
import Preview from "@/components/Preview";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";
import { UserIcon, Calendar, Lock, MessageSquareDotIcon } from "lucide-react";
import PostCard from "./_components/PostCard";
import Actions from "./_components/Actions";

const PostsPage = async ({ params }: { params: { topicId: string } }) => {

    const topic = await db.topic.findUnique({
        where: {
            id: params.topicId
        },
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
        <div className="p-6 md:p-12">

            <BackButton />

            <TitlePage icon={MessageSquareDotIcon} title={`${topic?.title}`} />

            <div className="mb-4">
            {topic?.userId === "aaa" && (
                <Actions 
                    categoryId={topic.categoryId}
                    topicId={params.topicId}
                    isLocked={!!topic?.isLocked}
                />
            )}
            </div>

            <div className="relative p-6 mb-4 rounded-lg border bg-sky-900 text-white border-slate-400">
                {topic?.isLocked && (
                    <Lock 
                        size={30}
                        className="mb-2 md:absolute top-5 right-5 rounded-md p-[6px] bg-red-500 text-white"
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