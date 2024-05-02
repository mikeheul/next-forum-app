import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server"; 

export async function POST(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try {
        const { title, message } = await req.json();

        const categoryId = params.categoryId;

        const { userId } = auth();
        if(!userId) redirect("/") 

        const topic = await db.topic.create({
            data: { 
                title,
                categoryId,
                userId
            }
        })

        const post = await db.post.create({
            data: {
                message,
                topicId: topic.id,
                userId
            }
        });

        return NextResponse.json(topic);

    } catch (error) {
        console.log("[TOPICS]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}