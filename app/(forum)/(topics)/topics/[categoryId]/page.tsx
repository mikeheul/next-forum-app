import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import Link from "next/link";
import TopicForm from "./_components/TopicForm";
import { Lock } from "lucide-react";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";

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
        include: {
            posts: {
                select: {
                    id: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <div className="p-6">

            <BackButton />

            <TitlePage title={`${category?.name}`} />
            
            {topics.map(topic => (
                // TODO : TopicCard
                <Link 
                    className="flex flex-col"
                    key={topic.id}
                    href={`/posts/${topic.id}`}    
                >
                    <div key={topic.id} className="bg-slate-100 hover:bg-slate-200/80 shadow-sm rounded-md mb-4 p-4 border border-slate-200">
                        <div className="relative">
                            {topic.isLocked && (
                                <Lock 
                                    size={25}
                                    className="block mb-2 md:absolute top-0 right-0 rounded-md p-[6px] bg-red-500 text-white"
                                />
                            )}    
                            <h2 className="text-lg font-semibold mb-2">
                                {topic.title}
                            </h2>
                        </div>
                        <div className="flex flex-col md:flex-row text-xs text-gray-600">
                            <span className="mr-2">{topic.userId}</span>
                            <span>{formatDateTime(topic.createdAt)}</span>
                        </div>
                        <p>{topic.posts.length} post{topic.posts.length > 1 ? 's' : ''}</p>
                    </div>
                </Link>
            ))}

            <TopicForm 
                categoryId={category?.id}
            />
        </div>
    );
}

export default TopicsPage;