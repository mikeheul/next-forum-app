import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import ToastProvider from "@/components/providers/toaster-provider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Forum",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          <Navbar />
          <main className="p-2 md:p-6">
            {children}
          </main>
      </body>
    </html>
  );
}
