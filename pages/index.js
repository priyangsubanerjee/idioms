/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main>
      <nav className="h-16 lg:h-20 border-b lg:px-28 px-6 flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/484/484582.png"
          className="h-8 lg:h-10"
          alt=""
        />
        <h1 className="font-cormorant text-2xl lg:text-3xl ml-4 font-medium">
          Idiom space
        </h1>
        <ul className="hidden lg:flex text-zinc-700 font-jost items-center space-x-6 ml-16">
          <li className="flex space-x-2 px-3 items-center py-1 bg-blue-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>Home</span>
          </li>
          <li className="flex space-x-2 px-3 items-center py-1 bg-blue-100/0 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <span>Random</span>
          </li>
          <li>Play quiz</li>
          <li>Contribute</li>
        </ul>
        <div className="ml-auto">
          <div className="flex items-center">
            <div className="lg:h-12 h-10 w-10 lg:w-12 rounded-full bg-red-100"></div>
            <div className="hidden lg:block ml-2">
              <h2 className="text-base font-jost">Priyangsu Banerjee</h2>
              <div className="flex items-center space-x-2 mt-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                  className="h-4 w-4"
                  alt=""
                />
                <span className="text-xs font-jost">100 points</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <ul className="flex lg:hidden font-jost items-center space-x-7 text-zinc-800 overflow-auto whitespace-nowrap px-6 py-5">
        <li className="flex px-5 items-center py-1 bg-blue-100 rounded-full">
          Home
        </li>
        <li>Random</li>
        <li>Play quiz</li>
        <li>Contribute</li>
      </ul>
      <div className="py-16 lg:py-24 flex flex-col justify-center bg-gradient-to-b from-transparent to-blue-50">
        <div>
          <h1 className="text-3xl lg:text-5xl font-cormorant text-center font-semibold px-6 lg:px-60 leading-[1.4] lg:leading-[1.4]">
            Learn idioms and phrases from the experts all around the world.
          </h1>
          <div className="hidden lg:flex items-center justify-center space-x-10 mt-16">
            <div className="flex items-center space-x-2 font-jost text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>

              <span>Fresh feed everyday</span>
            </div>
            <div className="flex items-center space-x-2 font-jost text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span>100+ collections</span>
            </div>
            <div className="flex items-center space-x-2 font-jost text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-red-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>

              <span>400+ active users</span>
            </div>
          </div>
          <div className="flex items-center w-[90%] lg:w-[60%] bg-white h-16 rounded-full mx-auto border border-blue-900/60 lg:mt-16 mt-12 px-6">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for an idiom, phrase or a keyword ..."
              className="w-full outline-none bg-transparent ml-5 font-jost"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
