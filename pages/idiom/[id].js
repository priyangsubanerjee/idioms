import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function Id() {
  const [tab, setTab] = useState("meaning");
  return (
    <main>
      <div className="px-6 mt-7">
        <Navbar
          subheading={"In for a penny, in for a pound"}
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

        <div className="mt-7">
          {tab == "meaning" ? (
            <div>
              <button className="text-blue-600 text-sm">
                Contribute new meaning
              </button>

              <div className="mt-8 text-sm leading-6 text-zinc-800 border-b pb-2">
                <p className="">
                  That someone is intentionally investing his time or money for
                  a particular project or task.
                </p>
                <div className="flex items-center justify-between mt-3 space-x-4 text-zinc-500">
                  <span>2 days ago</span>
                  <button className="text-blue-600">Flag inappropriate</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <button className="text-blue-600 text-sm">
                Contribute new example
              </button>
              <div className="mt-8 text-sm leading-6 text-zinc-800 border-b pb-2">
                <p className="">
                  When Athlead was booming, Jim was in for a penny and in for a
                  pound, that’s how much dedicated he was.
                </p>
                <div className="flex items-center justify-between mt-3 space-x-4 text-zinc-500">
                  <span>2 days ago</span>
                  <button className="text-blue-600">Flag inappropriate</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Id;
