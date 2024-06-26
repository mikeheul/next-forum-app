"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import SubTitlePage from "@/components/SubTitlePage";
import Tiptap from "@/components/TipTap";
import { useState } from "react";
import { Editor } from "@tiptap/react";

interface PostFormProps {
    topicId?: string;
}

// Defining form schema using Zod
const formSchema = z.object({
    message: z.string().min(1, {
        message: 'Message is required',
    }),
});

const PostForm = ({
    topicId
}: PostFormProps) => {

    const router = useRouter();
    const confetti = useConfettiStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        if (values.message.replace(/<(.|\n)*?>/g, '').trim().length === 0) {
            toast.error("Please type something before submitting.");
            return;
        }

        try {
            await axios.post(`/api/post/${topicId}`, { message: values.message, topicId });
            toast.success("Post added !");
            confetti.onOpen()     
            
            const tiptapContent = document.querySelector('.ProseMirror') as HTMLElement;
            console.log(tiptapContent)
            if (tiptapContent) {
                tiptapContent.innerHTML = '';
            }
            
            form.reset();
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="mt-8">
            <SubTitlePage title="Add a New Post" />

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 mt-4"
                >
                    <FormField 
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    {/* <Editor
                                        {...field}
                                    /> */}
                                    <Tiptap
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center gap-x-2">
                        <Button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                        >
                            Reply
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default PostForm;