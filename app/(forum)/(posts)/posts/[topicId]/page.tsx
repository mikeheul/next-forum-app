import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import PostForm from "./_components/PostForm";
import Banner from "@/components/Banner";
import Preview from "@/components/Preview";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";
import LockButton from "./_components/LockButton";

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

            <div className="p-6 mb-4 rounded-lg border border-slate-400">
                <p>{topic?.userId}</p> 
                <p>{formatDateTime(topic?.createdAt)}</p>
                <div className="my-6">
                    <Preview
                        value={posts[0].message}
                        align
                    />
                </div>
            </div>

            {posts.map((post, index) => (
                // TODO : PostCard
                index !== 0 ? (
                    <div
                        className="flex flex-col md:flex-row gap-x-2 border border-slate-200 mb-2"
                        key={post.id}  
                    >
                        <div className="flex flex-col justify-center p-6 bg-emerald-700 text-white md:min-w-[300px]">
                            <p className="text-sm">{post.userId}</p>
                            <p className="text-xs">{formatDateTime(post.createdAt)}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6">
                            <Preview 
                                value={post.message} 
                                align={false}  
                            />
                        </div>
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