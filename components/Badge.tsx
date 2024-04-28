"use client";

interface BadgeProps {
    count: number;
    content: string;
}

const Badge = ({
    count,
    content
}: BadgeProps) => {
    return (
        <span className="inline-block bg-slate-300 text-slate-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300 mt-3">{count} {content}{count > 1 ? 's' : ''}</span>
    );
}

export default Badge;