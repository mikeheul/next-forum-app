import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import PostForm from "./_components/PostForm";
import Banner from "@/components/Banner";

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
            <h1 className="text-2xl">Posts from {topic?.title}</h1>
            <ul>
                {posts.map(post => (
                    <div
                        className=""
                        key={post.id}  
                    >
                        {post.message} by {post.userId} at {formatDateTime(post.createdAt)}
                    </div>
                ))}
            </ul>

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