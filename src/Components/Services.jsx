import React, { useRef } from "react";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";
import S6 from "../assets/s6.png";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const containerRef = useRef(null);
  const services = [
    {
      title: "AI Models Marketplace",
      description:
        "Access a curated marketplace of pre-trained AI models designed for various industries and use cases. From image recognition to natural language processing, find the perfect model to fit your business needs. Download and implement models with minimal setup, accelerating your AI integration process.",
      image: S2,
    },
    {
      title: "Custom AI Model Development",
      description:
        "Build AI models tailored to your specific business requirements. Our experts work closely with your team to create models from scratch or modify existing ones, ensuring optimal performance on your unique data. From concept to deployment, we guide you through every step of the development process.",
      image: S6,
    },
    {
      title: "Model Fine-Tuning & Optimization",
      description:
        "Improve the accuracy and efficiency of pre-trained AI models with our fine-tuning and optimization services. We adjust model parameters to better align with your data and objectives, ensuring they perform at their best. Get maximum value from existing models with minimal re-training effort.",
      image: S3,
    },
    {
      title: "API Integration & Deployment",
      description:
        "Seamlessly integrate AI models into your applications using our easy-to-implement APIs. We handle the complexities of deployment, ensuring smooth operation and scalability in your production environment. Focus on your core business while we take care of AI integration and support.",
      image: S4,
    },
  ];

  useGSAP(() => {
    const animation = gsap.matchMedia();
    animation.add("(min-width:750px)", () => {
      const t1 = gsap.timeline();
      const t2 = gsap.timeline();
      t1.fromTo(
        ".serviceIMG",
        {
          rotateZ: -5,
          scale: 0.9,
        },
        {
          rotateZ: 10,
          scale: 1,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "linear",
        }
      );

      t2.fromTo(
        ".SERVICES_Container:not(:first-child)",
        {
          y: 1300,
          opacity: 0,
          rotateX: 200,
          scale: 3.5,
        },
        {
          y: 0,
          ease: "power1.out",
          opacity: 1,
          scale: 1,
          duration: 500,
          stagger: 495,
          rotateX: 0,
          scrollTrigger: {
            pin: containerRef.current,
            start: "top -15%",
            end: "bottom -10%",
            scrub: true,
          },
        }
      )
        .to(
          ".MAIN",
          {
            scale: 0.7,
            duration: 20,
            rotate: 10,

            ease: "power1.out",
            scrollTrigger: {
              trigger: ".MAIN",
              start: "top -23%",
              end: "bottom top",
              scrub: true,
            },
          }
          // Adds the scaling effect after the containers start animating
        )
        .to(
          ".MAIN",
          {
            scale: 0.7,
            duration: 20,
            rotate: 10,

            ease: "power1.out",
            scrollTrigger: {
              trigger: ".MAIN",
              start: "top -23%",
              end: "bottom top",
              scrub: true,
            },
          }
          // Adds the scaling effect after the containers start animating
        );
    });

    animation.add("(max-width:749px)", () => {
      const t1 = gsap.timeline();
      const t2 = gsap.timeline();
      t1.fromTo(
        ".serviceIMG",
        {
          rotateZ: -5,
          scale: 0.9,
        },
        {
          rotateZ: 10,
          scale: 1,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "linear",
        }
      ).to(
        ".MAIN",
        {
          scale: 0.9,
          duration: 20,

          ease: "power1.out",
          scrollTrigger: {
            trigger: ".MAIN",
            start: "bottom 99%",

            scrub: 1,
          },
        }
        // Adds the scaling effect after the containers start animating
      );
    });
  });

  const pattern = {
    overflow: "auto", // Enable scrolling
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none",
    backgroundImage: `
      linear-gradient(0deg, transparent 95%, rgba(41, 37, 36, 0.3) 50%),
      linear-gradient(90deg, transparent 95%, rgba(41, 37, 36, 0.3) 50%)
    `,
    backgroundSize:
      "50px 50px" /* Adjust size for the checkered pattern (thicker lines) */,
    backgroundPosition: "0 0, 0 0",
  };

  return (
    <div
      ref={containerRef}
      style={{ zIndex: 50 }}
      className=" MAIN border-[1px]  border-stone-800 text-white flex justify-center bg-black  w-full  rounded-t-3xl sm:rounded-b-2xl -mt-12 pb-12"
    >
      <div className=" OUTLINE  w-[90vw] relative border-l-[1px]  border-r-[1px] border-b-[1px]   border-stone-800">
        <div className="w-full flex items-center justify-center p-7 sm:p-10 border-stone-800 border-b-[1px]">
          <h1 className="uppercase text-[10vw] sm:text-[4vw] font-heading">
            Our services
          </h1>
        </div>

        {/* Ensure parent has a height to retain the borders */}
        <div className="relative  min-h-[100vh] ">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...(index === 0 ? { transform: "none", opacity: 1 } : {}),
                top: `${index * 3}vh`,
              }}
              className={`SERVICES_Container   sm:absolute top-0 left-0 w-full py-10 sm:py-0  flex items-start  pt-1 sm:pt-7 justify-center border-stone-800 ${
                index === 3 ? "border-none" : "border-b-[0px]"
              }   space-y-5  sm:border-b-0`}
            >
              <div className="Wrapper-Background bg-gradient-to-br from-pink-700 via-purple-800 to-blue-700 sm:rounded-[30px] p-[2px] overflow-hidden">
                <div
                  style={pattern}
                  className="w-[80vw] SERVICE-INNER bg-black sm:w-[65vw] h-[80vh] sm:h-[80vh] overflow-hidden sm:py-0 sm:rounded-[30px] sm:flex justify-between"
                >
                  <div className="content sm:space-y-10">
                    <div
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
                      }}
                      className="ServiceNumber sm:-mt-[5px] flex items-center justify-start sm:justify-center w-[20vw] sm:w-[10vw] h-[10vh] sm:rotate-90 bg-gradient-to-br from-pink-700 via-purple-800 to-blue-700"
                    >
                      <h1 className="font-text pl-5 sm:pl-0 sm:-rotate-90 font-bold text-lg sm:text-base tracking-tighter">
                        S/{index + 1}
                      </h1>
                    </div>
                    <h1
                      style={{ lineHeight: "2.2rem" }}
                      className="font-text sm:font-semibold mt-10 sm:mt-0 pl-5 sm:pl-16 tracking-[-0.5vw] sm:tracking-tighter leading-tight text-[4vh] sm:text-[4.5vh]"
                    >
                      {service.title}
                    </h1>
                    <h2 className="text-[3vw] mt-7 px-5 sm:pl-16 sm:text-[1.1vw] overflow-hidden break-words sm:w-[30vw] h-fit font-text text-stone-500">
                      {service.description}
                    </h2>
                  </div>
                  <div className="image relative sm:overflow-hidden flex items-center sm:items-center justify-center scale-90 h-[35vh] sm:h-[80vh]">
                    <img
                      className="serviceIMG  w-[55vw] sm:w-[35vw] object-center object-cover"
                      src={service.image}
                      alt=""
                    />
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

export default Services;
