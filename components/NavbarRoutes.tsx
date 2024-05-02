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
                    <>
                        <Link className="text-white" href="/sign-in">
                            Sign In
                        </Link>
                        <Link className="text-white" href="/sign-up">
                            Sign Up
                        </Link>
                    </>
                )} 
            </div>
        </>
    );
}

export default NavbarRoutes;