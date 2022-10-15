import React, { FC } from "react";
import { Bubble, Cards } from "./";
import { colors } from "../assets";

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
      className={`flex justify-around h-screen items-center ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ backgroundColor: card ? "#f9f9f9" : color }}
    >
      {image && <img src={image} alt="cintia-photo" />}
      {bubble && !doble && (
        <div
          className="grid grid-cols-4 gap-5"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "2em",
            marginRight: "5em",
          }}
        >
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
      <div className={`w-1/2 ${bubble?.length ? "ml-10" : ""}`}>
        <h1 className="text-center text-4xl font-bold">{title}</h1>
        <p className="text-center font-semibold text-xl text-gray-800">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Section;
