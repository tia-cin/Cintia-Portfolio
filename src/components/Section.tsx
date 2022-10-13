import React, { FC } from "react";
import { Bubble } from "./";

const Section: FC<{
  reverse?: boolean;
  color: any | string;
  title: string;
  subtitle: string;
  image?: any;
  data?: Array<any>;
}> = ({ reverse, color, title, subtitle, image, data }) => {
  return (
    <div
      className={`d-flex justify-content-around vh-100 align-items-center ${
        reverse ? "flex-row-reverse" : ""
      }`}
      style={{ backgroundColor: color }}
    >
      {image && <img src={image} alt="image" />}
      {data && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "2em",
            marginRight: "5em",
          }}
        >
          {data.map((item, i) => (
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
      <div className={`w-50 ${data?.length ? "ml-10" : ""}`}>
        <h1 className="text-center">{title}</h1>
        <p className="text-center fs-3 text-muted">{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
