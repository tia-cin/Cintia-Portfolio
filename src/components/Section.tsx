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
      className={`d-flex justify-content-around vh-100 align-items-center ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ backgroundColor: card ? "#f9f9f9" : color }}
    >
      {image && <img src={image} alt="image" />}
      {!doble && bubble ? (
        <div
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
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            margin: "0 5em",
            gap: "2em",
          }}
        >
          {card?.map((item: any, i: number) => (
            <Cards
              color={colors[Math.floor(Math.random() * 4)]}
              key={i}
              link={item.link}
              logo={item.logo}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}
      {doble && (
        <div className="d-flex flex-column">
          <h1 className="text-center my-4">Design ideas</h1>
          <div className="d-flex my-2">
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
          <h1 className="text-center my-4">Customize UI</h1>
          <div className="d-flex my-2">
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
      <div className={`w-50 ${bubble?.length ? "ml-10" : ""}`}>
        <h1 className="text-center">{title}</h1>
        <p className="text-center fs-3 text-muted">{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
