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

const colorMap: Record<Category["name"], string> = {
    "Music": "bg-cyan-950",
    "Photography": "bg-cyan-900",
    "Fitness": "bg-cyan-500",
    "Accounting": "bg-sky-900",
    "Computer Science": "bg-blue-900",
    "Filming": "bg-indigo-900",
    "Engineering": "bg-teal-900",
    "Web development": "bg-cyan-700",
    "Graphic Design": "bg-cyan-600" 
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
                    bgColor={colorMap[category.name]}
                    topicsCount={category.topics.length}
                />
            ))}
        </div>
    );
}

export default CategoriesList;