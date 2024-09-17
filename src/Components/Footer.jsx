import React from "react";

const Footer = () => {
  return (
    <div className="bg-black font-sans pt-16 ">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold font-text tracking-tighter text-gray-800 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get an update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-stone-100 bg-stone-950 border font-text rounded-md  border-stone-700 focus:outline-none"
                placeholder="Email Address"
              />

              <button className="w-full font-text px-6 py-2.5 text-sm bg-gradient-to-br from-pink-600 via-purple-700 to-blue-500 font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg ">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold font-text text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className=" text-stone-300  hover:underline hover:cursor-pointer hover:text-blue-400">
                Home
              </p>
              <p className=" text-stone-300  hover:underline hover:cursor-pointer hover:text-blue-400">
                Who we are
              </p>
              <p className=" text-stone-300  hover:underline hover:cursor-pointer hover:text-blue-400">
                Our Aim
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold font-text text-white">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className=" text-stone-300  hover:underline hover:cursor-pointer hover:text-blue-400">
                Information Technology
              </p>
              <p className=" text-stone-300  hover:underline hover:cursor-pointer hover:text-blue-400">
                Health & Security
              </p>
              <p className=" text-stone-300  hover:underline hover:cursor-pointer hover:text-blue-400">
                Fashion % Video Games
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 md:my-8 border-stone-500 h-2 " />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt=""
            />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              className=""
              width="30"
              height="30"
              alt="gt"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="pn"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              className=""
              width="30"
              height="30"
              alt="db"
            />
          </div>
        </div>
        <p className="font-text text-stone-300 p-8 text-start md:text-center md:text-lg md:p-4">
          © 2025 Alonix Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
