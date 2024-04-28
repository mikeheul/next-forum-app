"use client";

import Badge from "@/components/Badge";
import { formatDateTime } from "@/lib/format-datetime";
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
                <Badge
                    count={topic.posts.length}
                    content="post"
                />
            </div>
        </Link>
    );
}

export default TopicCard;