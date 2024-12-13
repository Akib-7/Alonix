import React, { useEffect, useState } from "react";

import gsap from "gsap";

const Loader = ({ load }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 20);
      setIsAnimating(true);

      return () => clearTimeout(timer);
    }
  });
  useEffect(() => {
    if (true) {
      const tl = gsap.timeline({
        onComplete: () => {
          load(); // Trigger the load function when the animation completes
        },
      });

      // First, the follow section animation
      tl.to("#follow", {
        autoAlpha: 1,
        width: "100%",
        delay: 2.7,
        duration: 0.8,
      });

      // Animate the progress bar and count together, then the logo at the same time as progress count
      tl.to("#progressBar", {
        opacity: 0,
        display: "none",
        duration: 0.5,
      });

      // Progress count fading out and logo scaling happen simultaneously
      tl.to(
        "#progressCount",
        {
          opacity: 0,
          display: "none",
          duration: 0.5,
        },
        "<" // This makes the progress count fade out together with the previous step
      ).to(
        "#logo",
        {
          scale: 10,
          opacity: 0,
          display: "none",
          duration: 0.8,
        },
        "<" // Animate the logo scaling at the same time as the progress count fades out
      );

      // Finally, the follow section expands
      tl.to("#follow", {
        width: "100%",
        height: "100%",
        delay: 0.3,
        duration: 0.8,
      });
    }
  }, [isAnimating]);

  return (
    <div className="w-screen h-screen bg-stone-900 flex justify-center items-center relative overflow-hidden">
      <div
        id="progressCount"
        className="w-fit h-fit absolute sm:bottom-[5vh] bottom-[10vh] left-10 "
      >
        <h1 className="text-white tracking-wide text-[7vw] sm:text-[3vw] font-heading">
          {count}%
        </h1>
      </div>
      <div
        id="progressBar"
        style={{ width: `${count}%` }}
        className=" hide w-screen h-[3px] z-0 absolute bg-gradient-to-br from-pink-800 via-purple-900 to-blue-900"
      ></div>
      <div id="follow" className="h-[3px] absolute bg-black  bg-b z-10"></div>
      <div
        id="logo"
        className=" absolute bottom-[45%]   z-[11] text-stone-300 font-heading uppercase tracking-widest text-3xl font-bold"
      >
        ALONIX
      </div>
    </div>
  );
};

export default Loader;
