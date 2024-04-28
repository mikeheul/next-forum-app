"use client";

import Badge from "@/components/Badge";
import { Category } from "@prisma/client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
    category: Category;
    topicsCount: number;
    icon: LucideIcon;
}

const CategoryCard = ({
    category,
    topicsCount,
    icon: Icon
}: CategoryCardProps) => {
    return (
        <Link href={`/topics/${category.id}`}>
            <div className="flex flex-col gap-y-2 w-full items-center justify-center border border-slate-200 shadow-lg md:w-[200px] h-[200px] hover:bg-slate-100 rounded-lg">
                <Icon className="text-sky-800" size={30} />
                <p>{category.name}</p>
                <Badge
                    count={topicsCount}
                    content="topic"
                />
            </div>
        </Link>
    );
}

export default CategoryCard;