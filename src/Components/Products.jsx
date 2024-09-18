import React, { useRef } from "react";
import M1 from "../assets/M1.png";
import M2 from "../assets/M2.png";

import M4 from "../assets/M4.png";
import M5 from "../assets/M5.png";

import M0 from "../assets/M0.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Products = () => {
  // Create an array of refs for each card
  const parallaxRef = useRef();

  useGSAP(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    t1.fromTo(
      ".PARALLAX_CONTAINER",
      {
        rotate: 0,
      },
      {
        scale: 7.3,
        rotate: 270,
        ease: "power1.out",
        scrollTrigger: {
          pin: parallaxRef.current,

          start: "top -35%",

          end: "bottom 20%",
          scrub: 2,
        },
      }
    );
    t2.fromTo(
      ".ZOOM-BOX-TEXT",
      {
        opacity: 0,
        scale: 1,
      },
      {
        opacity: 1,
        scale: 1.1,
        repeat: -1,
        duration: 1,
        yoyo: true,
      }
    );
  });

  return (
    <div
      ref={parallaxRef}
      className="bg-black PARENT overflow-hidden   text-white"
    >
      <div className="PAGE-0 flex  flex-col  justify-center items-center space-y-[15vh] sm:space-y-0">
        <div className="UPPER-CONTENT  w-full  border-t-[1px] border-stone-800 flex items-center justify-center p-7 ">
          <div className="flex flex-col items-center justify-center space-y-4  sm:w-[50vw] pt-10">
            <h1 className="uppercase text-[10vw] sm:text-[4vw] font-heading">
              AI Pioneers
            </h1>
            <p className=" text-stone-500 text-[2.2vw] sm:text-[1.1vw] font-text">
              Discover our AI Pioneers, each a groundbreaking solution
              meticulously crafted to address diverse industry needs with
              precision and innovation.
            </p>
          </div>
        </div>
        <div className="PARALLAX_CONTAINER  w-[90vw]  h-[100vh] flex items-center justify-center">
          <div className="relative flex items-center justify-center  w-[60vw] h-[80vh]">
            <div className="ZOOM-BOX  w-[18vw] h-[25vh] border-[0px] border-stone-900 flex items-center justify-center">
              <h1 className="ZOOM-BOX-TEXT text-white font-text">Immerse</h1>
            </div>
            <div className="IMAGE-1 left-3 bottom-[40vh]   absolute w-[18vw] h-[40vh] ">
              <img
                className="object-contain object-center w-full h-full "
                src={M1}
                alt=""
              />
            </div>
            <div className="IMAGE-2 top-0 left-[21vw]   absolute w-[22vw] h-[25vh] ">
              <img
                className="object-contain object-center w-full h-full "
                src={M0}
                alt=""
              />
            </div>
            <div className="IMAGE-3 right-0 top-[14vw]  absolute w-[19vw] h-[23vh] ">
              <img
                className="object-contain object-center w-full h-full "
                src={M4}
                alt=""
              />
            </div>
            <div className="IMAGE-4 left-3 bottom-[5vh]   absolute w-[18vw] h-[30vh] ">
              <img
                className="object-contain object-center w-full h-full "
                src={M2}
                alt=""
              />
            </div>
            <div className="IMAGE-2 bottom-0 left-[21vw]  absolute w-[22vw] h-[25vh] ">
              <img
                className="object-contain object-center w-full h-full "
                src={M5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
