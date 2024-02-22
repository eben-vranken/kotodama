'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={`${inter.className} flex flex-col  bg-body text-text`}>
        <Navbar />
        <section className="flex flex-col items-center [&>*]:max-w-[1500px] [&>*]:w-[95vw]">
          {children}
        </section>

      </body>
    </html>
  );
}
