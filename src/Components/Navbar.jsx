import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
const Navbar = () => {
  const t1 = gsap.timeline();

  const handleClose = () => {
    // Reverse the timeline when closing
    t1.reverse();
    document.body.style.overflowY = "visible";
  };

  const handleMenu = () => {
    document.body.style.overflowY = "hidden";
    t1.play();
  };
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };
  useGSAP(() => {
    t1.to(".menuBar", {
      x: 0,
      duration: 0.5,
      ease: "back.out(1.4)",
    })
      .fromTo(
        ".Y-AXIS",
        {
          x: "120%",
        },
        {
          x: 0,
          duration: 0.3,
          ease: "linear",
        }
      )
      .fromTo(
        ".ItemContainer",
        {
          opacity: 0,
          scale: 4,
        },
        {
          opacity: 1,
          scale: 1,

          duration: 0.6,
          stagger: 0.01,
          ease: "circ.out",
        }
      )
      .fromTo(
        ".TOP-items",
        {
          y: -30,
        },
        {
          y: 0,
          delay: 0.4,
          opacity: 1,
        },
        "<"
      )
      .fromTo(
        ".BOTTOM-items",
        {
          opacity: 0,
          y: 30,
        },
        {
          y: 0,
          opacity: 1,
        },
        "<"
      );
    t1.pause();
  });

  return (
    <div className="navbar  ">
      <div
        style={{ zIndex: 999 }}
        className="TOP-NAV  cursor-pointer  flex items-center justify-center absolute left-5 sm:left-16 top-5"
      >
        <h1 className="text-transparent tracking-widest sm:text-[1.5vw] text-[2.7vw] font-heading bg-clip-text bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500">
          {" "}
          ALONIX
        </h1>
        <span className="text-transparent tracking-widest sm:text-[1.7vw]  font-heading bg-clip-text bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500">
          👾
        </span>
      </div>
      <div
        style={{ zIndex: 999 }}
        onClick={handleMenu}
        className="TOP-NAV cursor-pointer  fixed right-5 sm:right-16 top-5"
      >
        <RiMenu3Fill className="text-3xl" color="white" />
      </div>

      <div
        id="menuBar"
        className="menuBar fixed translate-x-full right-0 top-0 h-[100vh] w-[100vw] flex justify-end backdrop-blur-sm items-center  "
        style={{ backgroundColor: "rgba(12, 10, 9, 0.7)", zIndex: 1000 }} // Set black background with opacity 0.5
      >
        <div className=" MARKEE relative flex-col flex  items-center  w-[8vh] sm:w-[10vh] h-[100vh]   overflow-hidden  bg-gradient-to-br from-pink-600 via-purple-900 to-blue-700"></div>
        <div
          id="menuItems"
          className="flex relative w-[50vw] sm:w-[40vw]  bg-black space-y-2 h-[100vh] flex-col   text-5xl font-semibold  items-start justify-center"
        >
          <div className="Y-AXIS absolute w-full  top-0 py-8 px-4 border-stone-800 border-b-[1px]">
            <div className="TOP-items opacity-0 flex w-full items-center justify-between  text-white">
              {" "}
              <h1 className="font-heading">Alonix</h1>
              <button
                onClick={handleClose}
                id="close"
                className="Button w-[50px] h-[50px]   rounded-full bg-gradient-to-br from-pink-600 via-purple-900 to-blue-700 text-white flex justify-center items-center text-lg cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
          <div className="w-full">
            <div className="ItemContainer ml-[10vw]  flex  py-2 space-x-5 items-center start w-fit  ">
              <h1 className="uppercase bg-gradient-to-br bg-clip-text from-pink-600 to-blue-600 font-extrabold text-transparent text-center text-[2.5vw] tracking-tighter font-text">
                01
              </h1>
              <h1
                onClick={() => handleScrollTo("home")}
                style={{ wordSpacing: "-1rem" }}
                className="item hover:translate-x-5 hover:transition-transform hover:scale-110  hover:duration-100   sm:text-[3vw]  cursor-pointer text-[5vw] text-white font-text tracking-tighter   "
              >
                Home
              </h1>
            </div>
            <div className="ItemContainer flex ml-[10vw]  py-2 space-x-5 items-center start w-fit  ">
              <h1 className="uppercase bg-gradient-to-br bg-clip-text from-pink-600 to-blue-600 font-extrabold text-transparent text-center text-[2.5vw] tracking-tighter font-text">
                02
              </h1>
              <h1
                onClick={() => handleScrollTo("services")}
                style={{ wordSpacing: "-1rem" }}
                className="item hover:translate-x-5 hover:transition-transform hover:scale-110 hover:duration-100 sm:text-[3vw]   cursor-pointer text-[5vw] text-white font-text tracking-tighter   "
              >
                Services
              </h1>
            </div>{" "}
            <div className="ItemContainer flex ml-[10vw]  py-2 space-x-5 items-center start w-fit  ">
              <h1 className="uppercase bg-gradient-to-br bg-clip-text from-pink-600 to-blue-600 font-extrabold text-transparent text-center text-[2.5vw] tracking-tighter font-text">
                03
              </h1>
              <h1
                onClick={() => handleScrollTo("products")}
                style={{ wordSpacing: "-0.5rem" }}
                className="item hover:translate-x-5 hover:transition-transform hover:scale-110 hover:duration-100 sm:text-[3vw]   cursor-pointer text-[5vw] text-white font-text tracking-tighter   "
              >
                AI Models
              </h1>
            </div>{" "}
            <div className="ItemContainer flex ml-[10vw]  py-2 space-x-5 items-center start w-fit  ">
              <h1 className="uppercase bg-gradient-to-br bg-clip-text from-pink-600 to-blue-600 font-extrabold text-transparent text-center text-[2.5vw] tracking-tighter font-text">
                04
              </h1>
              <h1
                onClick={() => handleScrollTo("members")}
                style={{ wordSpacing: "-1rem" }}
                className="item hover:translate-x-5 hover:transition-transform hover:scale-110 hover:duration-100 sm:text-[3vw]   cursor-pointer text-[5vw] text-white font-text tracking-tighter   "
              >
                Team
              </h1>
            </div>
            <div className="ItemContainer flex ml-[10vw]  py-2 space-x-5 items-center start w-fit  ">
              <h1 className="uppercase bg-gradient-to-br bg-clip-text from-pink-600 to-blue-600 font-extrabold text-transparent text-center text-[2.5vw] tracking-tighter font-text">
                05
              </h1>
              <h1
                onClick={() => handleScrollTo("contact")}
                style={{ wordSpacing: "-1rem" }}
                className="item hover:translate-x-5 hover:transition-transform hover:scale-110 hover:duration-100 sm:text-[3vw]   cursor-pointer text-[5vw] text-white font-text tracking-tighter   "
              >
                Contact
              </h1>
            </div>
          </div>
          <div className="Y-AXIS w-full  border-stone-800 border-t-[1px]   py-12 absolute bottom-0">
            <div className="BOTTOM-items flex items-center justify-around w-full">
              <h1 className=" font-text text-[2.1vw] sm:text-[1vw] text-stone-500  tracking-tighter ">
                @Alonix 2025
              </h1>
              <h1
                style={{ wordSpacing: "-0.2rem" }}
                className="font-text text-[2.1vw] sm:text-[1vw] text-stone-500  tracking-tighter "
              >
                Site by @Akib
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
