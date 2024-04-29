import { db } from "@/lib/db";
import TitlePage from "@/components/TitlePage";
import CategoriesList from "./_components/CategoriesList";

const CategoriesPage = async () => {

    const categories = await db.category.findMany({
        include: {
            topics: {
                select: {
                    id: true
                }
            }
        },
        orderBy: {
            name: 'asc'
        }
    });

    const categoriesWithTopicCount = categories.map(category => ({
        ...category,
        topicCount: category.topics.length
    }));
    
    // Sort the categories by the count of topics in descending order
    categoriesWithTopicCount.sort((a, b) => b.topicCount - a.topicCount);

    return (
        <div className="p-2 xs:p-6">
            <TitlePage title="Categories" />

            <CategoriesList
                categories={categoriesWithTopicCount}
            />
        </div>
    );
}

export default CategoriesPage;