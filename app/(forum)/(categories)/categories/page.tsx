import { db } from "@/lib/db";
import Link from "next/link";
import CategoryCard from "./_components/CategoryCard";
import TitlePage from "@/components/TitlePage";

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
        },
    })

    return (
        <div className="p-6">
            <TitlePage title="Categories" />

            <div className="flex flex-col w-full md:flex-row md:flex-wrap gap-x-3 gap-y-3">
                {categories.map(category => (
                    <CategoryCard 
                        key={category.id}
                        category={category}
                        topicsCount={category.topics.length}
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