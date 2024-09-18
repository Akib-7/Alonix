import React from "react";
import AI1 from "../assets/AI11.png";
import { SiSpeedtest } from "react-icons/si";
import { TbComet } from "react-icons/tb";
import { FaStudiovinari } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {
  const handleExplore = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const cardDetails = [
    {
      title: "RS-F8",
      description:
        "Empower your projects with the intelligence and efficiency of AI without the hassle of development.",
    },
    {
      title: "VX-A6",
      description:
        "Transform your ideas into reality with cutting-edge, ready-to-use AI models tailored for various applications.",
    },
  ];

  // useGSAP(() => {
  //   const t1 = gsap.timeline();
  //   t1.from(".IMAGE", {
  //     scale: 0,
  //     y: 1000,
  //     opacity: 0,
  //     duration: 2,
  //     zIndex: 10,
  //   });
  //   t1.from(".TOP-NAV", {
  //     y: -200,
  //     duration: 0.5,
  //   });
  //   t1.from(".ALONIX-HEADING", {
  //     opacity: 0,
  //     scale: 0,
  //     duration: 0.5,
  //     zIndex: 50,
  //     ease: "linear",
  //   }),
  //     t1.from(".PARAGRAPH", {
  //       opacity: 0,
  //       scale: 0,
  //       duration: 0.5,
  //     }),
  //     t1.from(".EXPLORE", {
  //       opacity: 0,
  //       x: 100,

  //       scale: 3,
  //       duration: 1.5,
  //       ease: "bounce.out",
  //     });
  //   t1.from(
  //     ".CARDS_Container",
  //     {
  //       x: 600,
  //       delay: 0.3,
  //       duration: 0.7,
  //       ease: "back.out(1.9)",
  //     },
  //     "<"
  //   );
  // });
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      data-scroll-section
      className="SCREEN bg-black"
    >
      <div className="Container relative  w-[100vw] flex flex-col justify-center items-center space-y-5">
        <div className="ALONIX-HEADING w-fit h-fit   absolute top-[5.5vh] sm:left-10 sm:top-[35vh]">
          <h1 className="text-white relative tracking-wide text-[9vw] sm:text-[6vw] font-heading">
            ALONIX
          </h1>
        </div>
        <div className="IMAGE relative h-fit pt-[4vh]">
          <img
            className="w-[95vw] sm:w-[100vw] sm:h-[100vh] bg-contain object-contain"
            src={AI1}
            alt=""
          />
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div> */}
        </div>

        <div className="PARAGRAPH flex justify-center items-center sm:absolute left-10 top-[48vh] w-fit px-16  sm:w-[25vw]  p-1 ">
          <p className="text-white text-[2.6vw] sm:text-[1vw]  text-center font-text">
            Create your own AI assistants using our own pre-trained AI models.
          </p>
        </div>
        <div className="EXPLORE border-[1px]   border-white rounded-lg shadow-[0px_0px_20px_rgba(255,255,255,0.6)] sm:absolute left-10 top-[60vh]">
          <button
            onClick={handleExplore}
            className=" text-white bg-gradient-to-br font-bold from-pink-600 via-purple-800 to-emerald-500 rounded-lg  px-[30vw] sm:px-[2.7vw] py-[2vw] sm:py-[0.8vw] text-[3.1vw] sm:text-[1.2vw] font-text tracking-widest sm:tracking-wider "
          >
            Explore
          </button>
        </div>

        <div className=" CARDS_Container  w-[100vw]  p-10 sm:w-[20vw] sm:p-0 sm:absolute right-10 ">
          {cardDetails.map((item, index) => (
            <div
              key={index}
              className="card mb-[5vh]   group hover:cursor-pointer hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out w-full  h-[25vh] sm:h-[30vh] bg-gradient-to-br from-pink-300 via-purple-500 to-emerald-300 p-[2px] sm:p-[1px] rounded-[20px]"
            >
              <div className="box relative w-full h-full bg-black group-hover:bg-gradient-to-br from-pink-800 to-purple-900 via-blue-600 rounded-[20px] ">
                <div
                  className="iconBOX absolute w-[60%] h-[25%] sm:h-[20%] sm:w-[65%] bg-gradient-to-br from-pink-300 via-purple-500 to-emerald-200 rounded-[30px] rounded-tr-none rounded-bl-3xl"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)",
                  }}
                >
                  <div
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 62% 100%, 0% 100%)",
                    }}
                    className="ICON w-[97%] p-4  h-[93%] sm:h-[97%] rounded-[20px] rounded-tr-none bg-black group-hover:bg-gradient-to-br from-pink-600 to-purple-600 via-blue-500 absolute flex items-center justify-start"
                  >
                    <h1 className="Card-Heading text-white font-heading pl-7 sm:pl-2 text-[20px] sm:text-lg">
                      {item.title}
                    </h1>
                  </div>
                </div>

                <div className="CONTENT  top-[9vh] w-[100%] h-[50%]  flex justify-start absolute px-8 sm:py-0 ">
                  <ol className="text-white pl-3 space-y-5">
                    <li className="text-white font-text text-xs sm:text-[0.8vw]">
                      {item.description}
                    </li>
                  </ol>
                </div>

                <div className="button absolute bottom-5 right-5">
                  <button className="text-white flex justify-center items-center bg-gradient-to-br to-blue-500 from-pink-500 via-purple-700 group-hover:border-[1px] border-white   rounded-full w-[50px] sm:w-[40px] sm:h-[40px]  h-[50px] text-[5vw] sm:text-[2vw] font-text transition-all duration-0 ease-in-out">
                    <BsArrowRight className="group-hover:-rotate-[360deg] transition-transform duration-1000 ease-in-out" />
                  </button>
                </div>

                <div className="CONTENT  right-8 sm:right-[1vw] top-[1vh] w-[32%] h-max flex justify-start  absolute p-2">
                  <div className="text-white font-text flex justify-between space-x-5 sm:space-x-3 text-xl sm:text-base">
                    <SiSpeedtest style={{ color: "white" }} />
                    <FaStudiovinari style={{ color: "white" }} />
                    <TbComet style={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
