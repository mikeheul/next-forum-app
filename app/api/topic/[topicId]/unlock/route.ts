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

        const unlockedTopic = await db.topic.update({
            where: {
                id: params.topicId
            },
            data: {
                isLocked: false,
            }
        })

        return NextResponse.json(unlockedTopic);

    } catch (error) {
        console.log("[UNLOCK_TOPIC]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}