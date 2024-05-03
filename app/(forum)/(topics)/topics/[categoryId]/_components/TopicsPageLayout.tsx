import { db } from "@/lib/db";
import { formatDateTime } from "@/lib/format-datetime";
import { LockIcon, UnlockIcon } from "lucide-react";
import Link from "next/link";

const TopicsPageLayout = async ({
    categoryId,
    children
}: {
    categoryId: string;
    children: React.ReactNode;
}) => {

    const category = await db.category.findUnique({
        where: {
            id: categoryId
        }
    })

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
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex-1">
                {children}
            </div>
            <div className="bg-slate-200 mb-4 md:mb-0 min-w-auto md:min-w-[400px] px-8 py-8 md:px-12 md:py-8 lg:px-8">
                <h2 className="text-xl font-semibold mb-8">Latest topics in {category?.name}</h2>
                <div className="flex flex-col gap-y-3">
                {lastTopics.map((topic) => (
                    <Link key={topic.id} href={`/posts/${topic.id}`}>
                        <div className="p-6 rounded-lg bg-white shadow-md gap-x-2 hover:bg-slate-100">
                            <p className="flex items-center gap-x-2 font-medium">
                                {topic.isLocked ? (
                                    <LockIcon className="hidden xs:block text-red-600" size={15} />
                                ) : (
                                    <UnlockIcon className="hidden xs:block text-green-600" size={15} />
                                )}
                            {topic.title}</p>
                            <p className="text-xs">{formatDateTime(topic.createdAt)}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
}

export default TopicsPageLayout;