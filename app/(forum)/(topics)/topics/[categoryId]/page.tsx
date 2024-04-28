import { db } from "@/lib/db";
import TopicForm from "./_components/TopicForm";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";
import TopicCard from "./_components/TopicCard";

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
                <TopicCard 
                    key={topic.id}
                    topic={topic}
                />
            ))}

            <TopicForm 
                categoryId={category?.id}
            />
        </div>
    );
}

export default TopicsPage;