"use client";

interface SubTitlePageProps {
    title: string;
}

const SubTitlePage = ({
    title
}: SubTitlePageProps) => {
    return (
        <h2 className="text-xl text-slate-700 font-medium my-6">{title}</h2>
    );
}

export default SubTitlePage;