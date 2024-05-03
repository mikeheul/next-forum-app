import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server"; 

export async function DELETE(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {

        const { userId } = auth();
        if(!userId) redirect("/") 

        const postId = params.postId;

        const post = await db.post.delete({
            where: {
                id: postId
            }
        });

        return NextResponse.json(post);

    } catch (error) {
        console.log("[POST_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}