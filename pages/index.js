/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" w-full flex flex-col bg-white overflow-y-auto snap-y snap-mandatory snap-always">
      <div className="h-screen w-full shrink-0 bg-red-100 snap-start"></div>
      <div className="h-screen w-full shrink-0 bg-blue-100 snap-start"></div>
      <div className="h-screen w-full shrink-0 bg-green-100 snap-start"></div>
      <div className="fixed inset-x-0 top-0 h-16 bg-black/5 z-10"></div>
      <div className="fixed bottom-16 right-0 w-16 h-44 bg-black/5 z-10"></div>
      <div className="fixed bottom-0 inset-x-0 h-16 right-0 w-full bg-black/5 z-10"></div>
    </main>
  );
}
