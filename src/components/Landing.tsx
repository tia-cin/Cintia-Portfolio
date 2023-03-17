import React, { FC } from "react";
import { colors } from "../assets";
import { Cards } from "./";
import { gsap, Expo } from "gsap";
import { BsArrowDown } from "react-icons/bs";

const Landing: FC<{
  topText?: string;
  middleText: string;
  bottomText: string;
  data?: Array<any>;
  id: string;
}> = ({ topText, middleText, bottomText, data, id }) => {
  // const animation = (e: any) => {
  //   document.querySelectorAll(".animated").forEach((move: any) => {
  //     let value = move.getAttribute("id");
  //     let x = (e.clientX * value) / 250;
  //     let y = (e.clientY * value) / 250;
  //     move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //   });
  // };

  // document.addEventListener("mousemove", animation);

  React.useEffect(() => {
    gsap.fromTo(
      "#titles",
      { duration: 0.5, opacity: 0, y: -40 },
      { duration: 0.5, opacity: 1, y: 0 }
    );

    gsap.fromTo(
      "#scrolldown",
      { opacity: 0, y: -40 },
      { duration: 2.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );
  }, []);

  return (
    <div
      id={id}
      className="flex flex-col justify-center items-center relative w-full h-screen overflow-hidden"
    >
      <div id="titles" className="flex flex-col w-full " style={{ zIndex: 1 }}>
        <p className="text-center font-semibold text-xl fadeUpMini sm:text-sm">
          {topText}
        </p>
        <h1 className="text-center text-7xl font-bold fadeUpMini sm:text-3xl">
          {middleText}
        </h1>
        <p className="text-center mt-5 text-lg fadeUpMini md:text-base">
          {bottomText}
        </p>
      </div>
      <div
        className={`z-0 ${
          data &&
          typeof data[0] !== "string" &&
          "grid grid-cols-3 gap-8 my-5 sm:grid-cols-2"
        }`}
      >
        {data ? (
          data.map((item, i) => (
            <Cards
              color={colors[Math.floor(Math.random() * 4)]}
              key={i}
              link={item.link}
              logo={item.logo}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <div id="scrolldown">
            <button className="relative -bottom-40 flex flex-col items-center ">
              Scroll down
              <BsArrowDown />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
