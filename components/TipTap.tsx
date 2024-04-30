import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import Underline from '@tiptap/extension-underline'
import { useState } from 'react'

const Tiptap = ({ onChange, content }: any) => {

    const handleChange = (newContent: string) => {
        onChange(newContent)
    }
    
    const editor = useEditor({
        extensions: [
            StarterKit, Underline
        ],
        editorProps: {
            attributes: {
                class: "flex flex-col px-4 py-3 border-b border-r border-l border-t border-gray-300 text-slate-700 h-[200px] gap-3 font-normal text-[16px] rounded-bl-md rounded-br-md outline-none"
            },
        },
        
        onUpdate: ({ editor }) => {
            handleChange(editor.getHTML())
        },
        // onBlur: ({ editor }) => {
        //     editor?.commands.clearContent(true)
        // },
    })

    return (
        <>
            <Toolbar editor={editor} content={content} />
            <EditorContent editor={editor} style={{ whiteSpace: "pre-line" }} />
        </>
    )
}

export default Tiptap