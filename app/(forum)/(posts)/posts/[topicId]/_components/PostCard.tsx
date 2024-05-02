"use client";

import Preview from "@/components/Preview";
import { formatDateTime } from "@/lib/format-datetime";
import { User, clerkClient } from "@clerk/nextjs/server";
import { Post } from "@prisma/client";

interface PostCardProps {
    topic: any;
    post: Post;
}

const PostCard = ({
    topic,
    post
}: PostCardProps) => {

    return (
        <div
            className="flex flex-col md:flex-row gap-x-2 border rounded-lg overflow-hidden border-slate-200 mb-4"
            key={post.id}  
        >
            <div className="flex flex-col justify-center p-6 bg-slate-700 text-white md:min-w-[300px]">
                <p className="text-sm">{post.userId}</p>
                <p className="text-xs">{formatDateTime(post.createdAt)}</p>
            </div>
            <div className="flex flex-col p-6">
                <p className="text-sm font-light italic">{topic?.title}</p>
                <Preview 
                    value={post.message} 
                    align={false}  
                />
            </div>
        </div>
    );
}

export default PostCard;