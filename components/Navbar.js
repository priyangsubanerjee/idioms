import Link from "next/link";
import React from "react";

function Navbar({ heading, backEnabled = false }) {
  return (
    <div>
      {backEnabled && (
        <Link href={"/"}>
          <button className="flex items-center space-x-1 text-blue-500 -ml-1">
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <span>Home</span>
          </button>
        </Link>
      )}
      <h1 className="font-serif mt-6 font-semibold text-4xl text-zinc-800">
        {heading}
      </h1>
      <div className="px-5 bg-zinc-100 flex items-center w-full h-12 mt-5 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-zinc-500 mr-2"
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
          className="bg-transparent"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default Navbar;
