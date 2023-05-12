import React from "react";
import { useState, useEffect } from "react";
import { arr, tms, abtMyself, name, connectArr } from "../utils/constants";
import avatar3 from "../images/avatar3.jpg";

function Header() {
  const [myInfo, setMyInfo] = useState("");
  const [arrElement, setArrElement] = useState(0);
  const [posInArr, setPosInArr] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [isTimeoutCleared, setIsTimeoutCleared] = useState(false);

  useEffect(() => {
    if (isTimeoutCleared) return;

    let seconds = 200;
    tms(
      myInfo,
      setMyInfo,
      posInArr,
      setPosInArr,
      isIncreasing,
      setIsIncreasing,
      arrElement,
      setArrElement,
      isTimeoutCleared,
      setIsTimeoutCleared,
      seconds,
      arr
    );
  }, [myInfo, isTimeoutCleared, arrElement, posInArr, isIncreasing]);

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-screen flex justify-around my-3 md:justify-between lg:justify-between md:my-5  lg:my-6">
        <div className="text-lg font-sans mt-2 ml-3 md:ml-5 lg:ml-10 lg:text-2xl md:text-2xl">
          developedByMe
        </div>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1dlVWXaRNp9GDm3jGvAXkpZbibxEaRFoU/view?usp=share_link",
              "_blank"
            )
          }
          className="mr-3  p-2 bg-blue-600 rounded-lg  text-white md:mr-5 lg:mr-10 lg:text-xl md:text-xl"
        >
          Resume
        </button>
      </div>
      <div className="text-4xl mt-10 font-extrabold font-serif text-blue-500">
        {name}
      </div>
      <div className="text-lg  text-slate-600 m-2 mt-3 font-serif font-bold">
        {myInfo + "|"}
      </div>
      <div className=" lg:w-1/2 md:w-1/2 flex align-middle justify-center content-center lg:text-center md:text-center ">
        <h1 className="text-base  m-4 text-slate-500 md:text-lg lg:text-lg">
          {abtMyself}
        </h1>
      </div>
      <img
        className=" mt-10 rounded-full h-52 w-52 lg:h-72 lg:w-72 bg-slate-800"
        src={avatar3}
        alt="logo"
      ></img>
      <div className="flex w-screen justify-around lg:justify-evenly md:justify-around">
        {connectArr.map((info) => {
          return (
            <img
              src={info.img}
              alt="logo"
              className="cursor-pointer h-12 w-12 mt-10 lg:h-16 lg:w-16 md:h-16 md:w-16"
              onClick={() => {
                window.open(info.link, "_blank");
              }}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
