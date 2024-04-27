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
import Editor from "@/components/Editor";
import SubTitlePage from "@/components/SubTitlePage";

interface TopicFormProps {
    categoryId?: string;
}

// Defining form schema using Zod
const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
    message: z.string().min(1, {
        message: 'Message is required',
    }),
});

const TopicForm = ({
    categoryId
}: TopicFormProps) => {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            message: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/category/${categoryId}`, { title: values.title, message: values.message, categoryId });
            toast.success("Topic added !");
            form.reset();
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <SubTitlePage title="Add a New Topic" />

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 mt-4"
                >
                    <FormField 
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                        placeholder="Title...'"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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
                                        placeholder="First post...'"
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

export default TopicForm;