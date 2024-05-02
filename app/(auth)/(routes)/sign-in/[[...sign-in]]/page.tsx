import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col items-center mt-10">
            <SignIn path="/sign-in" />
        </div>
    )
}