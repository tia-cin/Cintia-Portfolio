import React, { FC } from "react";
import { Bubble } from "./";

const Section: FC<{
  reverse?: boolean;
  color: any | string;
  title: string;
  subtitle: string;
  image?: any;
  bubble?: any;
  card?: Array<any>;
  doble?: boolean;
}> = ({ reverse, color, title, subtitle, image, bubble, card, doble }) => {
  return (
    <div
      className={`flex justify-around h-screen items-center sm:flex-col-reverse overflow-hidden ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ backgroundColor: card ? "#f9f9f9" : color }}
    >
      {image && (
        <img
          src={image}
          alt="cintia-profile"
          className="sm:w-200 h-200 drop-shadow-lg"
        />
      )}
      {bubble && !doble && (
        <div className="grid grid-cols-4 gap-5 mr-20 sm:mr-0 sm:gap-1">
          {bubble.map((item: any, i: number) => (
            <Bubble
              key={i}
              link={item.link}
              logo={item.logo}
              alt={item.alt}
              color={color}
            />
          ))}
        </div>
      )}
      {doble && (
        <div className="flex flex-col">
          <h1 className="text-center my-4 font-bold text-3xl">Design ideas</h1>
          <div className="flex my-2">
            {bubble[1]?.map((item: any, i: number) => (
              <Bubble
                key={i}
                link={item.link}
                logo={item.logo}
                alt={item.alt}
                color={color}
              />
            ))}
          </div>
          <h1 className="text-center my-4 font-bold text-3xl">Customize UI</h1>
          <div className="flex my-2">
            {bubble[0]?.map((item: any, i: number) => (
              <Bubble
                key={i}
                link={item.link}
                logo={item.logo}
                alt={item.alt}
                color={color}
              />
            ))}
          </div>
        </div>
      )}
      <div className={`w-1/2`}>
        <h1
          className={`text-center text-4xl font-bold sm:text-lg ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-center font-semibold text-xl w-700 sm:w-400 text-gray-800 sm:text-sm ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Section;
