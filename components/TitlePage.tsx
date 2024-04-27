"use client";

interface TitlePageProps {
    title: string;
}

const TitlePage = ({
    title
}: TitlePageProps) => {
    return (
        <h1 className="text-xl md:text-2xl text-teal-600 font-semibold my-6 line-clamp-1">{title}</h1>
    );
}

export default TitlePage;