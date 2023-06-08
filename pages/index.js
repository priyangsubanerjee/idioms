/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="fixed inset-0 h-full w-full bg-white overflow-y-auto">
      <Head>
        <meta name="theme-color" content="rgb(238 242 255)" />
      </Head>
      <div>
        <div className="bg-indigo-50 py-16">
          <img src="/loginSketch.svg" className="h-32 mx-auto" alt="" />
        </div>
        <div className="px-4 mt-10 text-center">
          <h1 className="text-3xl font-serif font-medium text-center">
            Learn Idioms
          </h1>
          <p className="mt-4 leading-7 text-zinc-700 text-xs">
            The more words you know, the more clearly and powerfully you will
            think and the more ideas you will invite into your mind
          </p>
          <ul className="space-y-4 mt-7 bg-gradient-to-br from-slate-50 text-sm text-zinc-600 w-fit mx-auto p-7 rounded-lg">
            <li>1000+ Idioms</li>
            <li>Open source community</li>
            <li>Privacy first - no tracking</li>
          </ul>

          <div className="px-6 mt-10">
            <button className="w-full bg-black rounded-full text-white h-12 flex items-center justify-center">
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
