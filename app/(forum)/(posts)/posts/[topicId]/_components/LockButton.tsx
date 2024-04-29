"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { LockIcon, UnlockIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface LockButtonProps {
    topicId: string;
    isLocked: boolean;
}

const LockButton = ({
    topicId,
    isLocked
}: LockButtonProps) => {

    const router = useRouter()

    const onClick = async () => {
        try {
            if(!isLocked) {
                await axios.patch(`/api/topic/${topicId}/lock`);
                toast.success("Topic locked !");
            } else {
                await axios.patch(`/api/topic/${topicId}/unlock`);
                toast.success("Topic unlocked !");
            }

            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    }

    return (
        <Button 
            className={cn(
                "",
                !isLocked ? "bg-red-500 hover:bg-red-500/80" : "bg-green-800 hover:bg-green-800/80"
            )}
            onClick={onClick}
        >
            {!isLocked ? (
                <LockIcon
                    className="h-4 w-4 mr-2"
                    />
            ) : (
                <UnlockIcon
                    className="h-4 w-4 mr-2"
                />
            ) }
            {isLocked ? "Unlock" : "Lock"}
        </Button>
    );
}

export default LockButton;