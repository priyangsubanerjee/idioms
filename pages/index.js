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
    <main className="bg-gradient-to-b from-blue-900 to-sky-600 h-screen">
      <Head>
        <meta name="theme-color" content="rgb(30 58 138)" />
      </Head>
    </main>
  );
}
