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
        <span className="inline-block bg-slate-300 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300 mt-3 mb-3 shadow-lg shadow-slate-900/30">{count} {content}{count > 1 ? 's' : ''}</span>
    );
}

export default Badge;