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
  id: string;
}> = ({ reverse, color, title, subtitle, image, bubble, card, doble, id }) => {
  return (
    <div
      id={id}
      className={`flex justify-evenly h-screen items-center sm:flex-col-reverse overflow-hidden ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ backgroundColor: card ? "#f9f9f9" : color }}
    >
      {image && (
        <div className="scale-75 drop-shadow-lg">
          <img
            src={image}
            alt="cintia-profile"
            className="w-full rounded-3xl bg-white"
          />
        </div>
      )}
      {/* {bubble && !doble && (
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
      )} */}
      <div className={`w-3/4`}>
        <h1
          className={`uppercase text-4xl font-bold sm:text-lg ${
            reverse && "text-center"
          }`}
        >
          {title}
        </h1>
        <p
          className={`font-medium text-xl w-700 sm:w-400 text-gray-800 sm:text-sm ${
            reverse && "text-right"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Section;
