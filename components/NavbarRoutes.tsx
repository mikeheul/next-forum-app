"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {

    const { userId } = useAuth()

    const pathname = usePathname();

    return ( 
        <>
            <div className="flex gap-x-2 ml-auto">
                {(userId) ? (
                    <UserButton 
                        afterSignOutUrl="/"
                    />

                ) : (
                    <div className="flex flex-col lg:flex-row gap-x-4">
                        <Link className="text-white border border-white/20 bg-slate-800 hover:bg-slate-800/70 px-4 py-2 rounded-lg" href="/sign-in">
                            Sign In
                        </Link>
                        <Link className="text-white border border-white/20 hover:bg-slate-600 px-4 py-2 rounded-lg" href="/sign-up">
                            Sign Up
                        </Link>
                    </div>
                )} 
            </div>
        </>
    );
}

export default NavbarRoutes;