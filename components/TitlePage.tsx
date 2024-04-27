"use client";

interface TitlePageProps {
    title: string;
}

const TitlePage = ({
    title
}: TitlePageProps) => {
    return (
        <h1 className="text-xl md:text-3xl text-slate-700 font-semibold my-6 line-clamp-1">{title}</h1>
    );
}

export default TitlePage;