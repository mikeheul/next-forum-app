"use client";

import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
    category: Category;
    topicsCount: number;
    icon: LucideIcon;
    bgColor: string;
}

const CategoryCard = ({
    category,
    topicsCount,
    icon: Icon,
    bgColor
}: CategoryCardProps) => {
    return (
        <Link href={`/topics/${category.id}`}>
            <div className={cn("flex flex-col gap-y-2 w-full items-center justify-center text-center border border-slate-200 text-white shadow-xl hover:-translate-y-2 transition duration-500 h-[200px] rounded-lg", bgColor)}>
                <Icon className="text-white" size={30} />
                <p>{category.name}</p>
                <Badge
                    count={topicsCount}
                    content="topic"
                />
                {/* <Badge
                    count={10}
                    content="post"
                /> */}
            </div>
        </Link>
    );
}

export default CategoryCard;