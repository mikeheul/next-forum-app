import { db } from "@/lib/db";
import { NextResponse } from "next/server"; 

export async function POST(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try {
        const { title, message } = await req.json();

        const categoryId = params.categoryId;

        const topic = await db.topic.create({
            data: { 
                title,
                categoryId,
                userId: 'aaa'
            }
        })

        const post = await db.post.create({
            data: {
                message,
                topicId: topic.id,
                userId: 'aaa'
            }
        });

        return NextResponse.json(topic);

    } catch (error) {
        console.log("[TOPICS]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}