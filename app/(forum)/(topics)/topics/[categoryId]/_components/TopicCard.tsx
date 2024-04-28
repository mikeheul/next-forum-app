"use client";

import { formatDateTime } from "@/lib/format-datetime";
import { Topic } from "@prisma/client";
import { Lock } from "lucide-react";
import Link from "next/link";

interface TopicCardProps {
    topic: any;
}

const TopicCard = ({
    topic
}: TopicCardProps) => {
    return (
        <Link 
            className="flex flex-col"
            key={topic.id}
            href={`/posts/${topic.id}`}    
        >
            <div key={topic.id} className="bg-slate-100 hover:bg-slate-200/80 shadow-sm rounded-md mb-4 p-4 border border-slate-200">
                <div className="relative">
                    {topic.isLocked && (
                        <Lock 
                            size={25}
                            className="block mb-2 md:absolute top-0 right-0 rounded-md p-[6px] bg-red-500 text-white"
                        />
                    )}    
                    <h2 className="text-lg font-semibold mb-2">
                        {topic.title}
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row text-xs text-gray-600">
                    <span className="mr-2">{topic.userId}</span>
                    <span>{formatDateTime(topic.createdAt)}</span>
                </div>
                <span className="inline-block bg-slate-300 text-slate-800 text-xs font-semibold px-2 py-1 rounded-full dark:bg-slate-900 dark:text-slate-300 mt-3">{topic.posts.length} post{topic.posts.length > 1 ? 's' : ''}</span>
            </div>
        </Link>
    );
}

export default TopicCard;