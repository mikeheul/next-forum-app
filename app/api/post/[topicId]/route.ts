import { db } from "@/lib/db";
import { NextResponse } from "next/server"; 

export async function POST(
    req: Request,
    { params }: { params: { topicId: string } }
) {
    try {
        const { message } = await req.json();

        const topicId = params.topicId;

        const post = await db.post.create({
            data: {
                message,
                topicId: topicId,
                userId: 'aaa'
            }
        });

        return NextResponse.json(post);

    } catch (error) {
        console.log("[TOPICS]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}