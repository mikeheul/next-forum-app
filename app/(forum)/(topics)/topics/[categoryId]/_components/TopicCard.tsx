"use client";

import Actions from "@/app/(forum)/(posts)/posts/[topicId]/_components/Actions";
import Badge from "@/components/Badge";
import { formatDateTime } from "@/lib/format-datetime";
import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { CalendarDaysIcon, Lock, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TopicCardProps {
    topic: any;
    categoryId: string;
    userTopic: any;
}

const TopicCard = ({
    topic,
    categoryId,
    userTopic
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
                            <div className="flex flex-col text-xs text-gray-700 mb-3">
                                <span>{formatDateTime(topic.createdAt)}</span>
                                <span className="flex items-center gap-x-3">
                                    <Image src={userTopic.img} alt="avatar" width={32} height={32} className="rounded-full" />
                                    {userTopic.fullName}
                                </span>
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