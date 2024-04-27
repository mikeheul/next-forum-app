import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params } : { params : { topicId: string; } }
) {
    try {
        
        const topic = await db.topic.findUnique({
            where: {
                id: params.topicId
            }
        })

        if(!topic) { return new NextResponse("Topic not found", { status: 404 }) }

        const lockedTopic = await db.topic.update({
            where: {
                id: params.topicId
            },
            data: {
                isLocked: true,
            }
        })

        return NextResponse.json(lockedTopic);

    } catch (error) {
        console.log("[LOCK_TOPIC]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}