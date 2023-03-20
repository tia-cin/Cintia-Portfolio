import React, { FC } from "react";
import { colors } from "../assets";
import { Bubble } from "./";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

interface SectionProps {
  reverse?: boolean;
  color: any | string;
  title: string;
  subtitle: string;
  image?: any;
  bubble?: any;
  card?: Array<any>;
  doble?: boolean;
  id: string;
}

const Section: FC<SectionProps> = ({
  reverse,
  color,
  title,
  subtitle,
  image,
  bubble,
  card,
  doble,
  id,
}) => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const imagesLeft = gsap.utils.toArray(".fromLeft") as HTMLElement[];

    imagesLeft.forEach((item: HTMLElement) => {
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          toggleActions: "play reverse play reverse",
        },
      });
      timeLine.from(item, {
        x: -100,
        opacity: 0,
        duration: 1,
      });
    });

    const imagesRight = gsap.utils.toArray(".fromRight") as HTMLElement[];

    imagesRight.forEach((item: HTMLElement) => {
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          toggleActions: "play reverse play reverse",
        },
      });
      timeLine.from(item, {
        x: 100,
        opacity: 0,
        duration: 1,
      });
    });
  }, []);
  return (
    <div
      id={id}
      className={`gs_reveal flex justify-evenly h-screen items-center sm:flex-col-reverse overflow-hidden ${
        reverse ? "flex-row-reverse fromLeft" : "fromRight"
      }`}
      style={{
        backgroundColor: card ? "#f9f9f9" : color,
      }}
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
      {bubble && !doble && (
        <div className="grid grid-cols-4 gap-10 mr-20 sm:mr-0 sm:gap-1">
          {bubble.map((item: any, i: number) => (
            <Bubble
              key={i}
              link={item.link}
              name={item.alt}
              color={colors[Math.floor(Math.random() * colors.length)]}
            />
          ))}
        </div>
      )}
      {doble && (
        <div className="flex flex-col">
          <h1 className="text-center my-4 font-bold text-3xl">Design ideas</h1>
          <div className="flex my-2">
            {bubble[1]?.map((item: any, i: number) => (
              <Bubble key={i} link={item.link} name={item.alt} color={color} />
            ))}
          </div>
          <h1 className="text-center my-4 font-bold text-3xl">Customize UI</h1>
          <div className="flex my-2">
            {bubble[0]?.map((item: any, i: number) => (
              <Bubble key={i} link={item.link} name={item.alt} color={color} />
            ))}
          </div>
        </div>
      )}
      <div className={`w-3/4 mr-20 px-20`}>
        <h1
          className={`uppercase text-4xl font-bold sm:text-lg ${
            reverse && "text-right"
          }`}
        >
          {title}
        </h1>
        <p
          className={`font-medium text-xl  text-gray-800 sm:text-sm ${
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
