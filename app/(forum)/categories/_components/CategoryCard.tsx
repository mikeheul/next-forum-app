"use client";

import Link from "next/link";

interface CategoryCardProps {
    name: string;
    url: string;
}

const CategoryCard = ({
    name,
    url
}: CategoryCardProps) => {
    return (
        <Link href={`/topics/${url}`}>
            <div className="flex items-center justify-center border border-slate-200 shadow-md w-[200px] h-[200px]">
                {name}
            </div>
        </Link>
    );
}

export default CategoryCard;