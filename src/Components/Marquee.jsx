import gsap from "gsap";
import React from "react";

import { useGSAP } from "@gsap/react";

const Marquee = () => {
  const marqueeItems = [
    "AI Power",
    "Instant Integration",
    "Smart Solutions",
    "Effortless Automation",

    "Scalable Models",
    "Business Transformation",
    "Cutting-Edge AI",
  ];

  useGSAP(() => {
    gsap.to(
      ".marquee-container",

      {
        transform: "translateX(-100%)",
        duration: 20,
        repeat: -1,
        ease: "linear",
      }
    );
  });

  return (
    <div
      data-scroll
      data-scroll-speed="-0.05"
      data-scroll-section
      className="  text-white bg-black pb-10 "
    >
      <div className="flex bg-gradient-to-br   from-pink-700 to-purple-800 via-blue-700 z-10">
        <div className="flex flex-shrink-0 marquee-container py-[7vh]   sm:rounded-none sm:py-[7vh]    ">
          {marqueeItems.map((item, index) => (
            <h1
              style={{ wordSpacing: "0.5em" }}
              className="pr-20 text-[3vh] bg-black sm:text-[3vh]  font-heading tracking-wider"
              key={index}
            >
              {item}
            </h1>
          ))}
        </div>
        <div className="flex flex-shrink-0  marquee-container py-[7vh]   sm:rounded-none sm:py-[7vh]   ">
          {marqueeItems.map((item, index) => (
            <h1
              style={{ wordSpacing: "0.5em" }}
              className=" pr-20 text-[3vh] sm:text-[3vh] bg-black  font-heading tracking-wider"
              key={index}
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
