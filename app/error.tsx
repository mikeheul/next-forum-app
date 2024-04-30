'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'
import Image from "next/image";
import svg from "../public/500.svg"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
}, [error])

return (
        <div className="flex flex-col items-center justify-center text-center h-[600px]">
            <Image src={svg} alt="500_image" width={500} />
            <h1>500 - Internal Server Error</h1>
            <p>Something went wrong !</p>
            <Link className="font-bold" href="/">
                Go back to the home page
            </Link>
        </div>
    )
}