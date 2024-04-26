import { db } from "@/lib/db";
import Link from "next/link";
import CategoryCard from "./_components/CategoryCard";
import TitlePage from "@/components/TitlePage";

const CategoriesPage = async () => {

    const categories = await db.category.findMany({
        orderBy: {
            name: 'asc'
        }
    })

    return (
        <div className="p-6">
            <TitlePage title="Categories" />

            <div className="grid grid-cols-6 gap-x-3 gap-y-3">
                {categories.map(category => (
                    <CategoryCard 
                        key={category.id}
                        name={category.name}
                        url={category.id}
                    />
                ))}
            </div>

            {/* <ul>
                {categories.map(category => (
                    <Link 
                        className="flex flex-col p-2 hover:bg-slate-100"
                        key={category.id}
                        href={`/topics/${category.id}`}    
                    >
                        {category.name}
                    </Link>
                ))}
            </ul> */}
        </div>
    );
}

export default CategoriesPage;