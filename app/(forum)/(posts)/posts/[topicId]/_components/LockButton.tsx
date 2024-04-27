"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
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
        <Button onClick={onClick}>
            {isLocked ? "Unlock" : "Lock"}
        </Button>
    );
}

export default LockButton;