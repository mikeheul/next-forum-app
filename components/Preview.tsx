"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.bubble.css"
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from "@tiptap/extension-underline";

interface PreviewProps {
    value: string;
    align: boolean;
}

const Preview = ({
    value,
    align
}: PreviewProps) => {

    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), {ssr: false }), []);
    
    const editor = useEditor({
        content: value,
        extensions: [StarterKit, Underline],
        editable: false
    })

    return ( 
        // <ReactQuill
        //     className={cn(
        //         align && "p-0"
        //     )}
        //     theme="bubble"
        //     value={value}
        //     readOnly
        // />
        <EditorContent editor={editor} />
    );
}

export default Preview;