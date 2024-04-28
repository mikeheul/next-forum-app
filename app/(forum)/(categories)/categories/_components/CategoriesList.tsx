"use client";

import { Category } from "@prisma/client";
import CategoryCard from "./CategoryCard";
import { BadgeEuroIcon, BriefcaseBusinessIcon, CameraIcon, CloudCogIcon, ComputerIcon, FilmIcon, LucideIcon, MedalIcon, MusicIcon, PaletteIcon } from "lucide-react";

const iconMap: Record<Category["name"], LucideIcon> = {
    "Music": MusicIcon,
    "Photography": CameraIcon,
    "Fitness": MedalIcon,
    "Accounting": BadgeEuroIcon,
    "Computer Science": ComputerIcon,
    "Filming": FilmIcon,
    "Engineering": BriefcaseBusinessIcon,
    "Web development": CloudCogIcon,
    "Graphic Design": PaletteIcon
}

interface CategoriesListProps {
    categories: Category[]
}

const CategoriesList = ({
    categories
}: CategoriesListProps) => {

    return (
        <div className="flex flex-col h-full justify-start lg:justify-start w-full md:flex-row md:flex-wrap gap-x-3 gap-y-3">
            {categories.map((category:any) => (
                <CategoryCard 
                    key={category.id}
                    category={category}
                    icon={iconMap[category.name]}
                    topicsCount={category.topics.length}
                />
            ))}
        </div>
    );
}

export default CategoriesList;