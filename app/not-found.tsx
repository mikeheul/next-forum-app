import Link from "next/link";
import Image from "next/image";
import svg from "../public/404.svg"

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center text-center h-[600px]">
                <Image src={svg} alt="404_image" width={500} />
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link className="font-bold" href="/">
                    Go back to the home page
                </Link>
        </div>
    );
}