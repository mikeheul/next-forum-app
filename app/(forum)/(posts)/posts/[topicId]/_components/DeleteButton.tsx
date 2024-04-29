"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { 
    AlertDialog, 
    AlertDialogOverlay, 
    AlertDialogContent, 
    AlertDialogDescription,
    AlertDialogHeader,  
    AlertDialogFooter 
} from "@/components/ui/alert-dialog";
import { useState } from "react";


interface DeleteButtonProps {
    categoryId: string;
    topicId: string;
}

const DeleteButton = ({
    categoryId,
    topicId,
}: DeleteButtonProps) => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    const onDeleteConfirmed = async () => {
        try {
            await axios.delete(`/api/topic/${topicId}/delete`);
            toast.success("Topic deleted !");

            router.push(`/topics/${categoryId}`)
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    }

    const onDeleteClick = () => setIsOpen(true);

    return (
        <>
            <Button 
                className={cn(
                    "mb-4 bg-slate-700"
                )}
                onClick={onDeleteClick}
            >
                <Trash2Icon 
                    size={12}
                    className="mr-2"
                />
                Delete
            </Button>
            
            <AlertDialog open={isOpen} onOpenChange={onClose}>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader>Confirm deletion</AlertDialogHeader>
                    <AlertDialogDescription>Are you sure you want to delete this topic?</AlertDialogDescription>
                    <AlertDialogFooter>
                        <Button onClick={onDeleteConfirmed}>Yes</Button>
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default DeleteButton;