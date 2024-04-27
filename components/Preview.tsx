"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.bubble.css"

interface PreviewProps {
    value: string;
    isCenter: boolean;
}

const Preview = ({
    value,
    isCenter
}: PreviewProps) => {

    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), {ssr: false }), []);
    
    return ( 
        <ReactQuill
            className="flex flex-col items-center justify-center p-6"
            theme="bubble"
            value={value}
            readOnly
        />
    );
}

export default Preview;