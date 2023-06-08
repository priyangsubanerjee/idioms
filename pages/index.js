/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <nav className="px-8 mt-5">
        <h1 className="font-bold text-3xl text-slate-800">Home</h1>
      </nav>

      <div className="px-8 mt-7">
        <div className="h-32 w-full border rounded-md"></div>
      </div>

      <nav className="fixed bottom-0 inset-x-0 w-full h-16 z-20 border-t"></nav>
    </main>
  );
}
