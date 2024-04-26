"use client";

interface SubTitlePageProps {
    title: string;
}

const SubTitlePage = ({
    title
}: SubTitlePageProps) => {
    return (
        <h2 className="text-xl text-teal-600 font-medium my-6">{title}</h2>
    );
}

export default SubTitlePage;