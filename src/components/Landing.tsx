import React, { FC } from "react";
import { gsap, Expo } from "gsap";
import { BsArrowDown } from "react-icons/bs";

const Landing: FC<{
  topText?: string;
  middleText: string;
  bottomText: string;
  id: string;
}> = ({ topText, middleText, bottomText, id }) => {
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
      <div id="scrolldown">
        <button className="relative -bottom-40 flex flex-col items-center ">
          Scroll down
          <BsArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Landing;
