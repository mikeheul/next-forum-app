import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import Link from "next/link";

const TopicsPage = async ({ params }: { params: { categoryId: string } }) => {

    const category = await db.category.findUnique({
        where: {
            id: params.categoryId
        }
    })

    const topics = await db.topic.findMany({
        where: {
            categoryId: params.categoryId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <div className="p-6">
            <h1 className="text-2xl">Topics from {category?.name}</h1>
            <ul>
                {topics.map(topic => (
                    <Link 
                        className="flex flex-col p-2 hover:bg-slate-100"
                        key={topic.id}
                        href={`/posts/${topic.id}`}    
                    >
                        {topic.title} by {topic.userId} at {formatDateTime(topic.createdAt)}
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default TopicsPage;