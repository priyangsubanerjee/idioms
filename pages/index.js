/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-learning-3985676-3299327.png?f=webp"
          alt=""
        />
      </div>
      <div className="px-6">
        <h1 className="text-4xl font-black text-zinc-900 font-jost">
          Idioms dictionary
        </h1>
        <p className="text-zinc-700 text-sm leading-7 mt-5">
          The largest dictionary of idioms and phrases currently in use in
          British, American and Australian English. Over 12000 phrases and
          expressions.
        </p>
        <button className="bg-zinc-900 px-7 h-12 rounded-full text-white mt-7 flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
            className="w-5 h-5 mr-2"
            alt=""
          />
          <span className="font-medium">Continue reading</span>
        </button>
      </div>
    </main>
  );
}
