/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useLayoutEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useLayoutEffect(() => {}, []);
  return (
    <main className="fixed inset-0 h-full w-full bg-white overflow-y-auto">
      <Head>
        <meta name="theme-color" content="rgb(255 255 255)" />
      </Head>
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-5xl font-serif">Idioms</h1>
        <button className="w-fit shadow-sm px-4 h-12 flex items-center justify-center border rounded-full text-sm mt-6 space-x-3 text-zinc-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
            <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
          </svg>
          <span>Importance of Idioms</span>
        </button>
      </div>
    </main>
  );
}
