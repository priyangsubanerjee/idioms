import GLobalState from "@/context/globalStates";
import React, { useContext } from "react";

function Contribute() {
  const { contributeOpen, setContributeOpen } = useContext(GLobalState);

  return (
    <>
      {contributeOpen && (
        <div className="fixed inset-0 h-full w-full bg-white z-10 overflow-y-auto">
          <div className="flex items-center justify-end px-6 mt-5">
            <button
              className="text-blue-500"
              onClick={() => setContributeOpen(false)}
            >
              Cancel
            </button>
          </div>
          <div className="px-6 mt-2">
            <div className="space-y-2">
              <label htmlFor="" className="text-sm font-semibold text-zinc-600">
                Phrase
              </label>
              <input
                type="text"
                placeholder="Enter the phrase"
                className="bg-transparent block w-full border py-3 px-4 border-zinc-200 rounded-md"
              />
            </div>
            <div className="space-y-2 mt-6">
              <label htmlFor="" className="text-sm font-semibold text-zinc-600">
                Phrase meaning
              </label>
              <textarea
                name=""
                className="bg-transparent block w-full border py-3 px-4 border-zinc-200 rounded-md"
                id=""
                cols="30"
                rows="6"
                placeholder="Enter meaning of the phrase"
              ></textarea>
            </div>
            <div className="space-y-2 mt-6">
              <label htmlFor="" className="text-sm font-semibold text-zinc-600">
                Use in a sentences
              </label>
              <textarea
                name=""
                className="bg-transparent block w-full border py-3 px-4 border-zinc-200 rounded-md"
                id=""
                cols="30"
                rows="6"
                placeholder="Example use of the phrase in a sentence"
              ></textarea>
            </div>
            <div className="flex items-center justify-end mt-7">
              <button className="px-6 py-2 bg-blue-500  hover:bg-blue-600 text-white rounded">
                Submit
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-zinc-50 p-4">
              <h2 className="font-medium text-sm">Rules for contributing</h2>
              <p className="text-xs text-zinc-500 mt-1 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="text-sm text-blue-500">Read more</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contribute;
