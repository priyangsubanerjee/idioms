/* eslint-disable @next/next/no-img-element */

import Navbar from "@/components/Navbar";
import GLobalState from "@/context/globalStates";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { contributeOpen, setContributeOpen } = useContext(GLobalState);
  return (
    <main>
      <div className="px-6 mt-16">
        <Navbar heading={"Idioms"} />
        <ul className="mt-7 text-sm">
          <Link href={"/random"}>
            <li className="flex items-center space-x-2 text-blue-600 border-b py-4">
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
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>

              <span>Random</span>
            </li>
          </Link>
          <li className="flex items-center space-x-2 text-blue-600 border-b py-4">
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
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>

            <span>Bookmarked</span>
          </li>
          <Link href={"/trending"}>
            <li className="flex items-center space-x-2 text-blue-600 border-b py-4">
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
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>

              <span>Trending</span>
            </li>
          </Link>

          <li className="flex items-center space-x-2 text-blue-600 border-b py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>

            <span>Sentiment</span>
          </li>
          <li
            onClick={() => setContributeOpen(true)}
            className="flex items-center space-x-2 text-blue-600 py-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>Contribute</span>
          </li>
        </ul>

        <div className="bg-zinc-50 p-4 mt-10">
          <h2 className="font-medium text-sm">Rules for contributing</h2>
          <p className="text-xs text-zinc-500 mt-1 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="text-sm text-blue-500">Read more</button>
        </div>
      </div>
    </main>
  );
}
