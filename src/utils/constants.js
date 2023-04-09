import cssLogo from "../images/cssLogo.png";
import mongodbLogo from "../images/mongodbLogo.png";
import htmlLogo from "../images/html5Logo.png";
import mysqlLogo from "../images/mysqlLogo.png";
import reactLogo from "../images/reactLogo.png";
import expressLogo from "../images/exressLogo.png";
import jsLogo from "../images/jsLogo.png";
import tailwindLogo from "../images/tailwindLogo.png";

export const arr = [
  "I am a Fullstack developer",
  "I love to reverse Engineer and build things.",
  "I am a MERN stack Developer",
];
export const name = "Vishnu Nair";
export const abtMyself =
  "Hello I'm a Frontend developer providing services for programming and design content needs. Join me down below and let's get cracking!";
export const tms = (
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
  seconds
) => {
  let timeout;
  if (isIncreasing) {
    timeout = setTimeout(() => {
      if (isIncreasing) {
        setMyInfo(myInfo + arr[arrElement][posInArr]);
        setPosInArr(posInArr + 1);
        if (posInArr === arr[arrElement].length - 1) {
          setIsIncreasing(false);
          clearTimeout(timeout);
          setIsTimeoutCleared(true);
          setTimeout(() => {
            setIsTimeoutCleared(false);
          }, 1000);

          return;
        }
      } else {
        setMyInfo(myInfo.slice(0, posInArr - 1));
        setPosInArr(posInArr - 1);
        if (posInArr === 1) {
          if (arrElement + 1 < arr.length) {
            setArrElement(arrElement + 1);
          } else {
            setArrElement(0);
          }
          setIsIncreasing(true);
        }
      }
    }, 190);
  } else {
    timeout = setTimeout(() => {
      if (isIncreasing) {
        setMyInfo(myInfo + arr[arrElement][posInArr]);
        setPosInArr(posInArr + 1);
        if (posInArr === arr[arrElement].length - 1) {
          setIsIncreasing(false);
          clearTimeout(timeout);
          setIsTimeoutCleared(true);
          setTimeout(() => {
            setIsTimeoutCleared(false);
          }, 1000);

          return;
        }
      } else {
        setMyInfo(myInfo.slice(0, posInArr - 1));
        setPosInArr(posInArr - 1);
        if (posInArr === 1) {
          if (arrElement + 1 < arr.length) {
            setArrElement(arrElement + 1);
          } else {
            setArrElement(0);
          }
          setIsIncreasing(true);
        }
      }
    }, 80);
  }

  return () => {
    clearTimeout(timeout);
  };
};

export const connectArr = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87-2NlZdH7Mk8vQHq1K2cJXt6UOyfgg8BRV5j_5Gg7w&usqp=CAU&ec=48665701",
    link: "mailto:vishnuna26@gmail.com",
  },
  {
    img: "data:image/png;base64,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",
    link: "https://www.linkedin.com/in/vishnu-nair-439472204/",
  },
  {
    img: "data:image/png;base64,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",
    link: "https://github.com/vish-n-u",
  },
  {
    img: "data:image/png;base64,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",
    link: "https://leetcode.com/vishnuna26/",
  },
];

export const skillsArr = [
  expressLogo,
  mongodbLogo,
  mysqlLogo,
  cssLogo,
  htmlLogo,
  jsLogo,
  reactLogo,
  tailwindLogo,
];
