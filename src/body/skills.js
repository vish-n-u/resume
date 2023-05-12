import React from "react";
import { skillsArr } from "../utils/constants";
import "animate.css";
import "tailwindcss-animatecss";
import { useInView } from "react-intersection-observer";
import projectArr from "../utils/projects";
const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // set the threshold for when the element should be considered in view
    triggerOnce: false, // set triggerOnce to false to re-animate the element on subsequent scrolls
  });
  const [fE, inViewfE] = useInView({
    threshold: 0.7, // set the threshold for when the element should be considered in view
    triggerOnce: false, // set triggerOnce to false to re-animate the element on subsequent scrolls
  });
  const [bE, inViewbE] = useInView({
    threshold: 0.8, // set the threshold for when the element should be considered in view
    triggerOnce: false, // set triggerOnce to false to re-animate the element on subsequent scrolls
  });
  const [fS, inViewfS] = useInView({
    threshold: 0.1, // set the threshold for when the element should be considered in view
    triggerOnce: false, // set triggerOnce to false to re-animate the element on subsequent scrolls
  });
  return (
    <>
      <div className=" lg:mt-44 md:mt-44 ">
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
                className={`box-content  animate animate__animated  ${
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
      <div className="flex   flex-col content-centre align-middle items-center  mt-10 justify-center w-screen  ">
        <h1 className="w-full flex mt-10 text-3xl  ml-3 font-serif lg:justify-center  lg:font-bold">
          Projects
        </h1>
        {Object.keys(projectArr).map((val, index) => {
          return (
            <>
              <h1
                className={`flex w-full ml-5 justify-start mt-10 text-lg font-semibold`}
              >
                {val}
              </h1>
              <div
                ref={val === "backend" ? bE : val === "frontend" ? fE : fS}
                className={`w-full  animate animate__animated flex flex-col lg:flex-row md:flex-row items-center content-center shadow-lg  m-5 rounded-lg `}
              >
                {" "}
                {Object.keys(projectArr[val]).map((result, index) => {
                  console.log(result);
                  return (
                    <div
                      className={`lg:w-1/3 md:w-1/3 w-full flex flex-col justify-center items-center animate animate__animated ${
                        val === "backend" &&
                        inViewbE &&
                        window.screen.width > 767
                          ? index % 2 === 0
                            ? "animate__fadeInRight"
                            : "animate__fadeInLeft"
                          : ""
                      } 
                    ${
                      val === "frontend" &&
                      inViewfE &&
                      window.screen.width > 767
                        ? index % 2 === 0
                          ? "animate__fadeInRight"
                          : "animate__fadeInLeft"
                        : ""
                    }
                    ${
                      val === "fullStack" &&
                      inViewfS &&
                      window.screen.width > 767
                        ? index % 2 === 0
                          ? "animate__fadeInRight"
                          : "animate__fadeInLeft"
                        : ""
                    }`}
                    >
                      <div
                        className={`bg-blue-200  aspect-video max-w-sm w-2/3   md:w-full lg:w-full md:max-w-sm lg:max-w-[400px]   m-5   box-content group relative overflow-hidden    rounded-xl shadow-lg  dark:shadow-md dark:shadow-blue-400 `}
                      >
                        <div>
                          {projectArr?.[val][result]?.img && (
                            <img
                              className=""
                              src={projectArr[val][result].img}
                              alt="projectImg"
                              rel="noreferrer noopener"
                            ></img>
                          )}
                          <div class="absolute inset-0 font-semibold bg-black opacity-0 hover:opacity-70 transition-opacity">
                            {val !== "backend" && (
                              <a
                                href={
                                  projectArr[val][result]?.link
                                    ? projectArr[val][result]?.link
                                    : projectArr[val][result]?.video ||
                                      "https://www.google.com"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className=" cursor-pointer text-xl text-white   absolute -bottom-full left-1/4 z-40 group-hover:bottom-1/3 pt-10 group-hover:pt-9 group-hover:mt-9   transition-all duration-500">
                                  {projectArr[val][result]?.link
                                    ? "view"
                                    : "video"}
                                </div>
                              </a>
                            )}
                            <a
                              href={projectArr[val][result]?.code}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div
                                className={`cursor-pointer text-xl text-white absolute -bottom-full    z-40 group-hover:bottom-1/2  transition-all duration-700 ${
                                  val === "backend" ? "left-2/4 " : "left-2/3"
                                }`}
                              >
                                code
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      {!projectArr[val][result]?.img && (
                        <h1 className="mb-2 transition duration-1000">
                          {result}
                        </h1>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
