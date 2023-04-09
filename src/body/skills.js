import React from "react";
import { skillsArr } from "../utils/constants";
import "animate.css";
import "tailwindcss-animatecss";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // set the threshold for when the element should be considered in view
    triggerOnce: false, // set triggerOnce to false to re-animate the element on subsequent scrolls
  });
  return (
    <>
      <div className=" lg:mt-44 md:mt-44">
        <h1 className="mt-10 text-3xl flex ml-3 font-serif lg:justify-center  lg:font-bold">
          Skills
        </h1>
        <div
          ref={ref}
          className="flex  flex-wrap md:justify-center lg:justify-center  justify-evenly  mt-6"
        >
          {skillsArr.map((logo, index) => {
            return (
              <div
                className={`box-content  animate animate__animated  lg:${
                  inView
                    ? index % 2 === 0
                      ? "animate__fadeInRight"
                      : "animate__fadeInLeft"
                    : ""
                }  lg:px-14 md:px-8 lg:shadow-xl md:shadow-2xl shadow-lg bg-white m-5 rounded-lg  `}
              >
                <img
                  className="h-32 w-36 p-4  lg:h-36 lg:w-40  md:h-36 md:w-40 "
                  alt="img.src"
                  src={logo}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center w-screen  ">
        {console.log(ref, inView)}
        <div
          ref={ref}
          className={`animate animate__animated  ${
            inView ? "animate__fadeInLeft" : ""
          }`}
        >
          Hello, world!
        </div>
        <div
          ref={ref}
          className={`animate animate__animated  ${
            inView ? "animate__fadeInRight" : ""
          }`}
        >
          Hello, Girl!
        </div>
      </div>
    </>
  );
};

export default Skills;
