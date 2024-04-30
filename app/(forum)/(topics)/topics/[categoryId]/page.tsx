import { db } from "@/lib/db";
import TopicForm from "./_components/TopicForm";
import BackButton from "@/components/BackButton";
import TitlePage from "@/components/TitlePage";
import TopicCard from "./_components/TopicCard";
import { Grid3X3Icon } from "lucide-react";
import TopicsPageLayout from "./_components/TopicsPageLayout";

const TopicsPage = async ({ params }: { params: { categoryId: string } }) => {

    const category = await db.category.findUnique({
        where: {
            id: params.categoryId
        }
    })

    if (!category) {
        throw new Error('Category not found');
    }

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
        orderBy: [
            {
                createdAt: 'desc'
            },
        ]
    })

    if (!topics) {
        throw new Error('Topics not found');
    }

    return (

        <TopicsPageLayout categoryId={params.categoryId}>
            <div className="p-6 md:p-12">

                <BackButton />

                <TitlePage icon={Grid3X3Icon} title={`${category?.name}`} />

                {topics.map(topic => (
                    <TopicCard 
                        key={topic.id}
                        topic={topic}
                        categoryId={params.categoryId}
                    />
                ))}

                <TopicForm 
                    categoryId={category?.id}
                />
            </div>
        </TopicsPageLayout>
    );
}

export default TopicsPage;