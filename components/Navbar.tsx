"use client";

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';
import NavbarRoutes from './NavbarRoutes';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
        <nav className='flex items-center flex-wrap bg-slate-700 px-8 md:px-12 py-6'>
            <Link className='text-2xl text-white font-bold' href='/categories'>
                Forum
            </Link>
            <button
                className='inline-flex p-3 hover:bg-slate-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
                aria-label='menu-burger'
            >
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
                className={`${
                    active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <NavbarRoutes />
            </div>
        </nav>
        </>
    );
};
