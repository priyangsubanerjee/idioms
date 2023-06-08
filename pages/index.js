/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <nav className="px-8 pt-10">
        <h1 className="font-bold text-3xl">Idioms</h1>
      </nav>
      <div className="px-8 mt-2">
        <div className="h-12 bg-zinc-100 rounded-lg flex items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-zinc-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent ml-2"
            name=""
            id=""
          />
        </div>
      </div>
      <nav className="fixed bottom-0 inset-x-0 w-full h-16 bg-zinc-50 z-20"></nav>
    </main>
  );
}
