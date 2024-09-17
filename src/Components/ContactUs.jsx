import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      {/* Top container with tagline and background image */}
      <div className="relative">
        {/* Image section */}
        <section
          className="w-full border-t-[1px]  border-stone-500 pt-[20vh] h-[40vh] lg:h-[55vh] bg-cover bg-center brightness-50"
          style={{ background: "black" }}
        ></section>

        {/* Tagline division */}
        <div className="absolute w-[100vw]  top-1/2 flex-col flex items-center justify-center md:left-[0%] -translate-y-1/2 text-white">
          <h1
            style={{ wordSpacing: "1rem" }}
            className=" text-[10vw]  md:text-[7vw] font-bold font-heading  tracking-wide uppercase"
          >
            Send Enquiry
          </h1>
        </div>
      </div>

      {/* Bottom relative container */}
      <div className="w-full h-[1200px] md:h-[120vh] lg:h-[100vh] bg-gradient-to-r from-pink-900 via-purple-900 to-blue-900 relative">
        {/* Division with floating form */}
        <div className="absolute -top-[3%] md:-top-[10%] left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded shadow overflow-hidden text-white">
          {/* Form / left div */}
          <div className="p-2 md:p-4 h-full bg-black border-[1px] border-stone-700 rounded-lg col-span-2">
            <form>
              {/* Form top part containing mail icon and heading */}
              <div className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
                <h2 className="text-2xl md:text-3xl font-semibold font-text tracking-tighter">
                  Connect Now!
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail-forward"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                  <path d="M3 6l9 6l9 -6" />
                  <path d="M15 18h6" />
                  <path d="M18 15l3 3l-3 3" />
                </svg>
              </div>

              {/* Bottom form with input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 font-text tracking-tighter gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold ">
                    Name <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-stone-700 placeholder-stone-600  text-stone-300 bg-black  p-2 rounded-md"
                    placeholder="Enter Your Name"
                    required
                    name="name"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Email <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-stone-700 placeholder-stone-600  text-stone-300 bg-black  p-2 rounded-md"
                    placeholder="Enter Your Email"
                    required
                    name="email"
                    type="email"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Phone <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-stone-700 placeholder-stone-600  text-stone-300 bg-black  p-2 rounded-md"
                    placeholder="Enter Your Phone Number"
                    required
                    name="phone"
                    type="tel"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Subject <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-stone-700 placeholder-stone-600  text-stone-300 bg-black  p-2 rounded-md"
                    placeholder="Enter Your Subject"
                    required
                    name="subject"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="font-semibold">
                    Message <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-stone-700 placeholder-stone-600  text-stone-300 bg-black  p-2 rounded-md"
                    placeholder="Enter Your Message"
                    required
                    name="message"
                    type="text"
                  />
                </div>
              </div>
            </form>

            {/* Submit button div */}
            <div className="flex items-center justify-center md:justify-end py-4 px-8">
              <button className="py-2 px-4 md:py-4 mdstone-700 placeholder-stone-600  text-stone-300 bg-gradient-to-r from-pink-900 via-purple-900 to-blue-900  rounded-md border-[0px] border-white flex items-center gap-2 hover:scale-95 transition-all">
                <span className="text-xl">Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-telegram"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right div */}
          <div className="py-6 px-4 h-[500px] md:h-full bg-gradient-to-b rounded-lg from-pink-700 via-purple-800 to-blue-700 grid grid-cols-1 grid-rows-5">
            <h2 className="text-xl font-text lg:text-2xl text-center md:text-start font-semibold">
              Contact Information
            </h2>

            <div className="row-span-4 font-text flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail-share"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
                <path d="M3 7l9 6l9 -6" />
                <path d="M16 22l5 -5" />
                <path d="M21 21.5v-4.5h-4.5" />
              </svg>
              <span>alonix@support.com</span>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4">
              <a title="youtube" href="#">
                <img
                  className="h-8 w-8 invert"
                  src="https://www.svgrepo.com/show/521936/youtube.svg"
                  alt="YouTube"
                />
              </a>
              <a title="linkedin" href="#">
                <img
                  className="h-12 w-12 invert"
                  src="https://www.svgrepo.com/show/520815/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
              <a title="instagram" href="#">
                <img
                  className="h-8 w-8 invert"
                  src="https://www.svgrepo.com/show/521711/instagram.svg"
                  alt="Instagram"
                />
              </a>
              <a title="github" href="#">
                <img
                  className="h-8 w-8 invert"
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="GitHub"
                />
              </a>
            </div>
            {/* End of icons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
