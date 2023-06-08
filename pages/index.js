/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="fixed inset-0 h-full w-full flex flex-col bg-white overflow-y-auto snap-y snap-mandatory snap-always">
      <div className="h-full w-full shrink-0 bg-red-100 snap-start"></div>
      <div className="h-full w-full shrink-0 bg-blue-100 snap-start"></div>
      <div className="h-full w-full shrink-0 bg-green-100 snap-start"></div>
    </main>
  );
}
