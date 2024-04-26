import { db } from "@/lib/db";
import Link from "next/link";

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
                    <Link 
                        className="flex flex-col p-2 hover:bg-slate-100"
                        key={category.id}
                        href={`/topics/${category.id}`}    
                    >
                        {category.name}
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesPage;