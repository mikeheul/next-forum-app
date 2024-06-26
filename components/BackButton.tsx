"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';

const BackButton = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <Link href="#" onClick={goBack}>
            <Button
                className='bg-white mb-3 text-slate-700 border-2 border-slate-700 hover:border-slate-700/70 hover:text-slate-700/70 hover:bg-white'
            >
                Back
            </Button>
        </Link>
    );
};

export default BackButton;