import React, { FC } from "react";
import { colors } from "../assets";
import { Cards } from "./";

const Landing: FC<{
  smallText?: string;
  bigText: string;
  mediumText: string;
  data: Array<any>;
}> = ({ smallText, bigText, mediumText, data }) => {
  const animation = (e: any) => {
    document.querySelectorAll(".animated").forEach((move: any) => {
      let value = move.getAttribute("id");
      let x = (e.clientX * value) / 250;
      let y = (e.clientY * value) / 250;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  document.addEventListener("mousemove", animation);

  return (
    <div className="flex flex-col justify-center items-center relative w-full h-screen overflow-hidden">
      <div className="flex flex-col w-1/2 " style={{ zIndex: 1 }}>
        <p className="text-center font-semibold text-xl fadeUpMini sm:text-sm">
          {smallText}
        </p>
        <h1 className="text-center text-7xl font-bold fadeUpMini sm:text-3xl">
          {bigText}
        </h1>
        <p className="text-center mt-5 text-lg fadeUpMini md:text-base">{mediumText}</p>
      </div>
      <div
        className={`z-0 ${
          typeof data[0] !== "string" &&
          "grid grid-cols-3 gap-8 my-5 sm:grid-cols-2"
        }`}
      >
        {data.map((item, i) =>
          typeof item === "string" ? (
            <img
              alt="blob"
              src={item}
              key={i}
              style={{
                top: 0,
                left: 0,
                objectFit: "contain",
                zIndex: 0,
              }}
              className="animated absolute w-full h-full sm:hidden drop-shadow-lg transition-all"
              id={(Math.floor(Math.random() * 5) + 1).toString()}
            />
          ) : (
            <Cards
              color={colors[Math.floor(Math.random() * 4)]}
              key={i}
              link={item.link}
              logo={item.logo}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Landing;
