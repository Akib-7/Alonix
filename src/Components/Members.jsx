import React, { useRef } from "react";
import { gsap } from "gsap";
import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";
import A4 from "../assets/A4.jpg";
import A5 from "../assets/A5.jpg";

const Members = () => {
  // Create refs for each card
  const cardRefs = useRef([]);

  // Handle hover enter
  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index].querySelector(".Avatar"), {
      x: "20vw",
      opacity: 1,
      duration: 0.7,
      ease: "power1.out",
      scale: 1,
    });
  };

  // Handle hover leave
  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index].querySelector(".Avatar"), {
      x: 0,
      opacity: 0,
      duration: 0.7,
      ease: "power1.out",
      scale: 0.5,
    });
  };

  const models = [
    { name: "Dr.Gray", title: "CEO & Founder", image: A1 },
    { name: "Sarah", title: "Dev & Partner", image: A3 },
    { name: "Belmont", title: "AI/ML Eng", image: A2 },
    { name: "Ziggy", title: "Data Analyst", image: A5 },
    { name: "Octavia", title: "AI/ ML Eng", image: A4 },
  ];

  return (
    <div className="w-screen">
      <div className="Container bg-black w-full h-full flex-col pt-10 border-t-[1px] border-stone-800 items-center space-y-10 justify-start">
        <h1
          style={{ wordSpacing: "1rem" }}
          className="uppercase text-white text-center text-[10vw] sm:sm:text-[4vw] sm:p-2 font-heading"
        >
          Meet The Team
        </h1>

        <div className="TeamMembers_Conatiner flex flex-col items-center justify-center w-[100vw] border-t-[1px] border-stone-800">
          {models.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`Member cursor-pointer w-full p-10 sm:py-16 sm:px-2  sm:w-[85vw] flex border-x-[1px] ${
                index == 4 ? "border-b-none" : "border-b-[1px]"
              } relative border-stone-800 items-center justify-between`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex  space-x-1">
                <h1 className="uppercase bg-gradient-to-br bg-clip-text from-pink-600 to-blue-600 font-extrabold text-transparent text-center text-[6vw] sm:text-[3.5vw] font-text">
                  /
                </h1>
                <h1 className="uppercase font-extrabold text-white text-center text-[6vw] sm:text-[3.5vw] tracking-tighter font-text">
                  {item.name}
                </h1>
              </div>
              <p
                style={{ wordSpacing: "-0.4rem" }}
                className="text-stone-500 uppercase  text-[2.2vw] sm:text-[1vw] sm:pr-10 font-text"
              >
                {item.title}
              </p>
              <div className="Avatar scale-50 opacity-0 left-16 w-[20vw] sm:w-[140px] h-[15vh] sm:h-[140px] absolute overflow-hidden   rounded-full">
                <img
                  className="object-contain object-center"
                  src={item.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
