"use client";

import Actions from "@/app/(forum)/(posts)/posts/[topicId]/_components/Actions";
import Badge from "@/components/Badge";
import { formatDateTime } from "@/lib/format-datetime";
import { useUser } from "@clerk/nextjs";
import { CalendarDaysIcon, Lock, User2Icon } from "lucide-react";
import Link from "next/link";

interface TopicCardProps {
    topic: any;
    categoryId: string;
    userFullName: string;
}

const TopicCard = ({
    topic,
    categoryId,
    userFullName
}: TopicCardProps) => {

    const { user } = useUser();

    return (
        <div className="bg-slate-200 hover:bg-slate-300/70 shadow-sm rounded-md mb-4 p-6 border border-slate-200">
            <Link 
                className="flex flex-col"
                key={topic.id}
                href={`/posts/${topic.id}`}    
            >
                <div key={topic.id} className="relative">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="">  
                            {topic.isLocked && (
                                <Lock 
                                    size={25}
                                    className="mb-2 rounded-md p-[6px] bg-red-500 text-white"
                                />
                            )}
                            <h2 className="text-xl font-semibold mb-2">
                                {topic.title}
                            </h2>
                            <div className="flex flex-col md:flex-row text-xs text-gray-700 mb-3">
                                <User2Icon className="mr-1" size={14} />
                                <span className="mr-2">
                                    {/* {(user && user.id === topic.userId) 
                                    ? user.fullName 
                                    : topic.userId }  */}
                                    {userFullName}
                                </span>
                                <CalendarDaysIcon className="mr-1" size={14} /><span>{formatDateTime(topic.createdAt)}</span>
                            </div>
                            <Badge
                                count={topic.posts.length}
                                content="post"
                            />
                        </div>
                    </div>
                </div>
            </Link>
            {user && topic?.userId === user.id && (
            <div className="mt-4">
                <Actions 
                    topicId={topic.id}
                    categoryId={categoryId}
                    isLocked={topic.isLocked}
                />  
            </div>
            )}
        </div>
    );
}

export default TopicCard;