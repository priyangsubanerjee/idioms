import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function Id() {
  const [tab, setTab] = useState("meaning");
  return (
    <main>
      <div className="px-6 mt-7">
        <Navbar
          subheading={"Lorem ipsum dolor sit amet."}
          backEnabled={true}
          searchEnabled={false}
        />
        <div className="mt-7 flex items-center justify-start h-10 border border-blue-600 w-fit rounded text-xs font-medium overflow-hidden">
          <button
            onClick={() => setTab("meaning")}
            className={`px-4 ${
              tab == "meaning"
                ? "bg-blue-600 text-white"
                : "bg-white text-zinc-700"
            } h-full`}
          >
            Meaning
          </button>
          <button
            onClick={() => setTab("use")}
            className={`px-4 ${
              tab == "use" ? "bg-blue-600 text-white" : "bg-white text-zinc-700"
            } h-full`}
          >
            Use in a sentence
          </button>
        </div>

        <button className="text-blue-600 mt-7 text-sm">
          Contribute new meaning
        </button>

        <div className="mt-8 text-sm leading-6 text-zinc-800 border-b pb-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit modi,
            consectetur voluptatibus odio cupiditate excepturi et nemo eos ex,
            corrupti inventore, consequatur soluta minus culpa nobis
            reprehenderit expedita voluptas nostrum.
          </p>
          <div className="flex items-center justify-between mt-3 space-x-4 text-zinc-500">
            <span>2 days ago</span>
            <button className="text-blue-600">Flag inappropriate</button>
          </div>
        </div>
        <div className="mt-8 text-sm leading-6 text-zinc-800 border-b pb-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit modi,
            consectetur voluptatibus odio cupiditate excepturi et nemo eos ex,
            corrupti inventore, consequatur soluta minus culpa nobis
            reprehenderit expedita voluptas nostrum.
          </p>
          <div className="flex items-center justify-between mt-3 space-x-4 text-zinc-500">
            <span>2 days ago</span>
            <button className="text-blue-600">Flag inappropriate</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Id;
