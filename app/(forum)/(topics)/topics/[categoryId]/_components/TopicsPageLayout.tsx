import { db } from "@/lib/db";
import Link from "next/link";

const TopicsPageLayout = async ({
    categoryId,
    children
}: {
    categoryId: string;
    children: React.ReactNode;
}) => {

    const lastTopics = await db.topic.findMany({
        take: 3,
        where: {
            categoryId: categoryId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <div className="flex">
            <div className="flex-1">
                {children}
            </div>
            <div className="bg-slate-200 min-w-[200px] p-6">
                <h2 className="font-semibold">Latest topics</h2>
                <div className="flex flex-col">
                    {lastTopics.map((topic) => (
                        <Link key={topic.id} href={`/posts/${topic.id}`}>
                            {topic.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TopicsPageLayout;