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

    return (
        <div className="p-6">
            <TitlePage title="Categories" />

            <CategoriesList
                categories={categories}
            />
        </div>
    );
}

export default CategoriesPage;