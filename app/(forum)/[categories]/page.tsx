import { db } from "@/lib/db";

const CategoriesPage = async () => {

    const categories = await db.category.findMany({
        orderBy: {
            name: 'asc'
        }
    })

    return (
        <div className="p-6">
            <h1 className="text-2xl">Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesPage;