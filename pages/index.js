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
      <div className="mt-24">
        <h1 className="text-5xl font-serif text-center">Idioms</h1>
        <div className="mt-6 flex justify-center">
          <button className="w-fit px-5 h-10 flex items-center justify-center border rounded-full text-sm space-x-3 text-zinc-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Once in a blue moon</span>
          </button>
        </div>
        <div className="px-6 mt-7">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex items-center text-sm space-x-2 bg-sky-100 rounded-full px-4 py-2">
              <span className="font-mono">1000+</span>
              <span className="text-sm">Cards</span>
            </div>
            <div className="flex items-center text-sm space-x-2 bg-sky-100 rounded-full px-4 py-2">
              <span className="font-mono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </span>
              <span className="text-sm">Open source community</span>
            </div>
          </div>
          <p className="font-normal text-sm leading-8 text-zinc-700 mt-9 text-center">
            Using idioms that are common in your industry can help you to build
            rapport with your colleagues and make you seem more like an insider.
          </p>
        </div>
        <div className="px-6 mt-10 space-y-5">
          <button className="h-16 bg-black text-white rounded-full border w-full flex items-center justify-center space-x-3">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
              className="h-9"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="h-16 rounded-full border w-full flex items-center justify-center space-x-3">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt=""
              className="h-9"
            />
            <span>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </main>
  );
}
