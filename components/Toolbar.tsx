"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
    Bold,
    Strikethrough,
    Italic,
    Underline,
} from "lucide-react";

type Props = {
    editor: Editor | null;
    content: string;
};

const Toolbar = ({ editor, content }: Props) => {
    if (!editor) {
        return null;
    }
    return (
        <div
        className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
        gap-5 w-full flex-wrap border border-gray-700"
        >
        <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
            <button
            onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleBold().run();
            }}
            className={
                editor.isActive("bold")
                ? "bg-slate-800 text-white p-2 rounded-lg"
                : "text-slate-600"
            }
            >
            <Bold className="w-5 h-5" />
            </button>
            <button
            onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleItalic().run();
            }}
            className={
                editor.isActive("italic")
                ? "bg-slate-800 text-white p-2 rounded-lg"
                : "text-slate-600"
            }
            >
            <Italic className="w-5 h-5" />
            </button>
            <button
            onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleStrike().run();
            }}
            className={
                editor.isActive("strike")
                ? "bg-slate-800 text-white p-2 rounded-lg"
                : "text-slate-600"
            }
            >
            <Strikethrough className="w-5 h-5" />
            </button>
            <button
            onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleUnderline().run();
            }}
            className={
                editor.isActive("underline")
                ? "bg-slate-800 text-white p-2 rounded-lg"
                : "text-slate-600"
            }
            >
            <Underline className="w-5 h-5" />
            </button>
        </div>
        </div>
    );
};

export default Toolbar;