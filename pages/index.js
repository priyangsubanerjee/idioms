import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useLayoutEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useLayoutEffect(() => {}, []);
  return (
    <main className="px-6 space-y-3 pb-20">
      <div className="bg-zinc-100 h-44 w-full"></div>
      <div className="bg-zinc-100 h-44 w-full"></div>
      <div className="bg-zinc-100 h-44 w-full"></div>
    </main>
  );
}
