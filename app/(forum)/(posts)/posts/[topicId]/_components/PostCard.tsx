"use client";

import Preview from "@/components/Preview";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/format-datetime";
import { useAuth } from "@clerk/nextjs";
import { Post } from "@prisma/client";
import axios from "axios";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface PostCardProps {
    topic: any;
    post: Post;
}

const PostCard = ({
    topic,
    post
}: PostCardProps) => {

    const { userId } = useAuth();
    const router = useRouter()

    const onClick = async () => {
        try {
            console.log(`postid : ${post.id}`)
            await axios.delete(`/api/post/delete/${post.id}`);
            toast.success("Post deleted !");
            
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    }

    return (
        <div
            className="flex flex-col md:flex-row gap-x-2 border rounded-lg overflow-hidden border-slate-200 mb-4"
            key={post.id}  
        >
            <div className="flex flex-col justify-center p-6 bg-slate-700 text-white md:min-w-[300px]">
                <p className="text-sm">{post.userId}</p>
                <p className="text-xs">{formatDateTime(post.createdAt)}</p>
            </div>
            <div className="flex flex-col p-6 w-full">
                <p className="text-sm font-light italic">{topic?.title}</p>
                <Preview 
                    value={post.message} 
                    align={false}  
                />
            </div>
            {userId && userId === post.userId && (
                <div className="flex justify-end p-6">
                    <Button onClick={onClick} className="bg-red-600 hover:bg-red-600/80 p-3 aspect-square">
                        <Trash2Icon size={15} />
                    </Button>
                </div>
            )}
        </div>
    );
}

export default PostCard;