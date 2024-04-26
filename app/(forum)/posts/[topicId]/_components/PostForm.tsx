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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Editor from "@/components/Editor";
import { useConfettiStore } from "@/hooks/use-confetti-store";

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
        try {
            await axios.post(`/api/post/${topicId}`, { message: values.message, topicId });
            toast.success("Post added !");
            confetti.onOpen()
            form.reset();
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <h2 className="text-xl font-medium">Add a New Post</h2>

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
                                    <Editor
                                        {...field}
                                    />
                                    {/* <Textarea
                                        rows={12}
                                        disabled={isSubmitting}
                                        placeholder="Your post...'"
                                        {...field}
                                    /> */}
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
                            Add
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default PostForm;