import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";

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
        </div>
    );
}

export default PostsPage;