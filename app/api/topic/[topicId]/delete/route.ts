import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
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

        const deletedPosts = await db.post.deleteMany({
            where: {
                topicId: params.topicId
            }
        })

        const deletedTopic = await db.topic.delete({
            where: {
                id: params.topicId
            },
        })

        return NextResponse.json(deletedTopic);

    } catch (error) {
        console.log("[DELETE_TOPIC]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}