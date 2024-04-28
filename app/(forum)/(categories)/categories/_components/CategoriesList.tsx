"use client";

import { Category } from "@prisma/client";
import CategoryCard from "./CategoryCard";

interface CategoriesListProps {
    categories: Category[]
}

const CategoriesList = ({
    categories
}: CategoriesListProps) => {

    return (
        <div className="flex flex-col w-full md:flex-row md:flex-wrap gap-x-3 gap-y-3">
            {categories.map((category:any) => (
                <CategoryCard 
                    key={category.id}
                    category={category}
                    topicsCount={category.topics.length}
                />
            ))}
        </div>
    );
}

export default CategoriesList;