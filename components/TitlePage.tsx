import { LucideIcon } from "lucide-react";

interface TitlePageProps {
    title: string;
    icon: LucideIcon
}

const TitlePage = ({
    title,
    icon: Icon
}: TitlePageProps) => {
    return (
        <div className="my-6 line-clamp-1 mb-8">
            <div className="flex item-center gap-x-3">
                <div className="flex items-center justify-center bg-sky-900 text-white p-3 rounded-full">
                    <Icon size={20} />
                </div>
                <h1 className="flex items-center justify-center text-xl md:text-3xl text-sky-900 font-semibold">{title}</h1>
            </div>
        </div>
    );
}

export default TitlePage;