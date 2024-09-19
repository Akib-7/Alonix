import React, { useRef, useEffect } from "react";
import M1 from "../assets/M1.png";
import M2 from "../assets/M2.png";
import M3 from "../assets/M3.png";
import VanillaTilt from "vanilla-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Models = () => {
  const tiltRefs = useRef([null]);
  useGSAP(() => {
    const animation = gsap.matchMedia();
    animation.add("(min-width:750px)", () => {
      gsap.fromTo(
        ".card-wrapper",
        { scale: 0.6 },
        {
          scale: 1.1,

          stagger: 0.3,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".INSIDE-PARALLAX",

            start: "-top 90%",
            end: "bottom 0%",
            scrub: true,
          },
        }
        // Adds the scaling effect after the containers start animating
      );
    });
    animation.add("(max-width:749px)", () => {
      gsap.fromTo(
        ".card-wrapper",
        { scale: 0.8 },
        {
          scale: 1.2,

          stagger: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".INSIDE-PARALLAX",

            start: "-top 50%",
            end: "bottom 10%",
            scrub: true,
          },
        }
        // Adds the scaling effect after the containers start animating
      );
    });
  });
  const models = [
    {
      title: "VisionXPro",
      description: "Advanced image recognition with real-time processing.",
      applications: ["security", "healthcare"],
      image: M1,
      explanation:
        "VisionXPro is designed to detect and process visual data in real-time. With cutting-edge algorithms, it can identify objects, patterns, and anomalies with extreme precision.",
      benefits: [
        "Enhanced security monitoring with live object detection.",
        "Improved diagnostic tools in healthcare for image analysis.",
      ],
      features: [
        "Real-time image recognition",
        "High precision and accuracy",
        "Integration with security and healthcare systems",
      ],
      releaseDate: "2023-04-12",
    },
    {
      title: "Data Drift AI",
      description: "Leverages machine learning to analyze historical data.",
      applications: ["ecommerce", "finance"],
      image: M2,
      explanation:
        "Data Drift AI monitors changes in data patterns over time, providing insights on shifts that could impact business decisions, making it ideal for sectors like e-commerce and finance.",
      benefits: [
        "Identifies shifts in customer behavior for e-commerce.",
        "Predicts trends and anomalies in financial data.",
      ],
      features: [
        "Historical data analysis",
        "Predictive trend modeling",
        "Real-time monitoring for data shifts",
      ],
      releaseDate: "2022-09-30",
    },
    {
      title: "Pixel Forge AI",
      description:
        "A neural network designed for artistic image transformations.",
      applications: ["fashion", "marketing"],
      image: M3,
      explanation:
        "Pixel Forge AI transforms ordinary images into stunning artistic visuals, making it ideal for creative industries such as fashion and marketing. It learns styles and adapts to produce unique outputs.",
      benefits: [
        "Automates artistic creation processes.",
        "Customizable image transformations for branding and marketing.",
      ],
      features: [
        "Neural style transfer",
        "Supports multiple artistic styles",
        "Fast processing for high-quality image rendering",
      ],
      releaseDate: "2021-11-18",
    },
  ];

  useEffect(() => {
    tiltRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 20,
          speed: 400,
          scale: 1,
          glare: true,
          "max-glare": 0.3,
        });
      }
    });

    return () => {
      tiltRefs.current.forEach((ref) => {
        if (ref && ref.vanillaTilt) {
          ref.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="h-fit pb-[20vh] bg-black sm:pb-0  -mt-[58vh] sm:-mt-0 sm:pt-0 pt-[40vh] MODELS-CONTAINER text-white">
      <div className="INSIDE-PARALLAX relative Products_Container  flex flex-col items-center">
        {models.map((item, index) => (
          <div
            key={index}
            style={{ zIndex: index + 100 }}
            className="card-wrapper    rounded-2xl h-fit  w-[90vw] sm:h-[100vh]  sm:mb-[20vh]  flex justify-center  items-center sm:items-center sm:justify-around"
          >
            <div className="DETAILS hidden sm:visible  cursor-pointer sm:w-[45vw] sm:h-[90vh] sm:flex flex-col items-center space-y-7 sm:p-10">
              <h1 className=" HEADING  bg-gradient-to-br bg-clip-text from-yellow-500 via-red-500 to-purple-700  text-transparent w-fit h-fit text-[6vw] sm:text-[3.5vw] font-bold tracking-wide mb-5 font-heading">
                {item.title}
              </h1>
              <div className="Inner-Content  w-[100%] p-2">
                <h1 className=" HEADING tracking-widest w-fit h-fit text-[6vw] sm:text-[1.7vw]   font-heading">
                  Overview:
                </h1>
                <span className=" Explanation  text-stone-500 tracking-wide w-fit h-fit text-[6vw] sm:text-[1vw]  font-text">
                  {item.explanation}
                </span>
              </div>
              <div className="Inner-Content  w-[100%] p-2">
                <h1 className=" HEADING tracking-widest w-fit h-fit text-[6vw] sm:text-[1.7vw]   font-heading">
                  Benefits:
                </h1>
                {item.benefits.map((item, index) => (
                  <li
                    key={index}
                    className=" Explanation mb-1 text-stone-500  tracking-widew-fit h-fit text-[6vw] sm:text-[1vw]  font-text"
                  >
                    {item}
                  </li>
                ))}
              </div>
              <div className="Inner-Content w-[100%] p-2">
                <h1 className=" HEADING tracking-widest w-fit h-fit text-[6vw] sm:text-[1.7vw]   font-heading">
                  Features:
                </h1>
                {item.features.map((item, index) => (
                  <li
                    key={index}
                    className=" Explanation mb-1 text-stone-500 tracking-wide w-fit h-fit text-[6vw] sm:text-[1vw]  font-text"
                  >
                    {item}
                  </li>
                ))}
              </div>
              <h1 className=" HEADING text-stone-400 tracking-wide w-fit ml-[70%]  h-fit text-[6vw] sm:text-[1.2vw]  font-heading">
                {item.releaseDate}
              </h1>
            </div>
            <div
              ref={(el) => (tiltRefs.current[index + 1] = el)}
              style={{ borderRadius: "100% / 20%" }}
              className="CARD   relative w-[75vw] sm:w-[35vw] h-[35vh]  sm:h-[50vh] px-16 flex flex-col items-center justify-center sm:justify-normal sm:pt-[12vh] mt-[40vh]  border-x-[1px]  border-stone-800   cursor-pointer"
            >
              <div className="ImageContainer sm:-top-[43vh] -top-[27vh]  absolute  z-10 w-[70%] sm:w-[20vw] flex items-center justify-center">
                <img
                  className="object-center  rounded-b-[70px] object-cover"
                  src={item.image}
                  alt="Model.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center sm:mt-[8vh] sm:px-10">
                <h1 className="text-[6vw] sm:text-[2vw] mb-5 font-heading">
                  {item.title}
                </h1>
                <p className="text-[2.4vw] sm:text-[1vw] font-text text-stone-500">
                  {item.description}
                </p>
              </div>
              <div className="TagsContainer  absolute bottom-[5vh] flex w-fit space-x-3">
                {item.applications.map((tag, index) => (
                  <div
                    key={index}
                    className="w-max p-2 flex justify-center items-center rounded-[30px] h-[5vh] border-[1px] text-stone-400 border-stone-500 text-[2.3vw] sm:text-[0.8vw] tracking-wide font-text"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
