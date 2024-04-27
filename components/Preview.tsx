"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.bubble.css"

interface PreviewProps {
    value: string;
    align: boolean;
}

const Preview = ({
    value,
    align
}: PreviewProps) => {

    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), {ssr: false }), []);
    
    return ( 
        <ReactQuill
            className={cn(
                align && "p-0"
            )}
            theme="bubble"
            value={value}
            readOnly
        />
    );
}

export default Preview;