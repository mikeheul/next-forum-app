"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css"
import Tiptap from "./TipTap";

interface EditorProps {
    // onChange: (value: string) => void;
    // value: string
}

// const TOOLBAR_OPTIONS = [
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     [{ font: [] }],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["bold", "italic", "underline"],
//     [{ color: [] }, { background: [] }],
//     [{ align: [] }],
//     ["image", "blockquote", "code-block"],
//     ["clean"],
// ];

const Editor = ({
    // onChange,
    // value
}: EditorProps) => {

    // const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), {ssr: false }), []);
    
    const [content, setContent] = useState<string>("")
    const handleContentChange = (reason: any) => {
        setContent(reason)
    } 

    return ( 
        <div className="bg-white">        
            {/* <ReactQuill
                //theme="snow"
                value={value}
                onChange={onChange}
                modules={{ toolbar: TOOLBAR_OPTIONS }}
            /> */}
            <Tiptap 
                content={content}
                onChange={(newContent: string) => handleContentChange(newContent)}
            />
        </div>
    );
}

export default Editor;