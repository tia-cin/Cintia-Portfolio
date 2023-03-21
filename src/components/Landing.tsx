import React, { FC } from "react";
import { BsArrowDown } from "react-icons/bs";

const Landing: FC<{
  topText?: string;
  middleText: string;
  bottomText: string;
  id: string;
}> = ({ topText, middleText, bottomText, id }) => {
  return (
    <div
      id={id}
      className="gs_reveal flex flex-col justify-center items-center relative w-full h-screen overflow-hidden"
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
