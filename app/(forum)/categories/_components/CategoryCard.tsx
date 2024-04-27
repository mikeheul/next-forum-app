"use client";

import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryCardProps {
    category: Category;
    topicsCount: number;
}

const CategoryCard = ({
    category,
    topicsCount
}: CategoryCardProps) => {
    return (
        <Link href={`/topics/${category.id}`}>
            <div className="flex flex-col gap-y-2 w-full items-center justify-center border border-slate-200 shadow-lg md:w-[200px] h-[200px] hover:bg-slate-100 rounded-lg">
                <p>{category.name}</p>
                <Badge
                    variant={"secondary"}
                >
                    {topicsCount} topic{topicsCount > 1 ? 's' : ''}
                </Badge>
            </div>
        </Link>
    );
}

export default CategoryCard;