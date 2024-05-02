import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server"; 

export async function POST(
    req: Request,
    { params }: { params: { topicId: string } }
) {
    try {
        const { message } = await req.json();

        const { userId } = auth();
        if(!userId) redirect("/") 

        const topicId = params.topicId;

        const post = await db.post.create({
            data: {
                message,
                topicId: topicId,
                userId
            }
        });

        return NextResponse.json(post);

    } catch (error) {
        console.log("[TOPICS]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}