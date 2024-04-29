"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface DeleteButtonProps {
    categoryId: string;
    topicId: string;
}

const DeleteButton = ({
    categoryId,
    topicId,
}: DeleteButtonProps) => {

    const router = useRouter()

    const onClick = async () => {
        try {
            await axios.delete(`/api/topic/${topicId}/delete`);
            toast.success("Topic locked !");

            router.push(`/topics/${categoryId}`)
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    }

    return (
        <Button 
            className={cn(
                "mb-4"
            )}
            onClick={onClick}
        >
            <Trash2Icon 
                size={12}
                className="mr-2"
            />
            Delete
        </Button>
    );
}

export default DeleteButton;