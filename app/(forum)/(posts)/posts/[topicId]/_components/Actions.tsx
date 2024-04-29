"use client";

import DeleteButton from "./DeleteButton";
import LockButton from "./LockButton";

interface ActionsProps {
    categoryId: string | null;
    topicId: string;
    isLocked: boolean;
}

const Actions = ({
    categoryId,
    topicId,
    isLocked
}: ActionsProps) => {
    return (
        <div className="flex gap-x-2">
            <LockButton 
                topicId={topicId}
                isLocked={isLocked}
            />
            <DeleteButton 
                categoryId={categoryId!}
                topicId={topicId}
            />
        </div>
    );
}

export default Actions;