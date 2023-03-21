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
    const animateFrom = (elem: HTMLElement, direction?: any) => {
      direction = direction || 1;
      let x = 0,
        y = direction * 100;
      if (elem.classList.contains("fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("fromRight")) {
        x = 100;
        y = 0;
      }
      elem.style.transform = "translate(" + x + "px, " + y + "px)";
      elem.style.opacity = "0";
      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto",
        }
      );
    };

    const hide = (elem: HTMLElement) => gsap.set(elem, { autoAlpha: 0 });

    (gsap.utils.toArray(".gs_reveal") as HTMLElement[]).forEach(
      (elem: HTMLElement) => {
        hide(elem);

        ScrollTrigger.create({
          trigger: elem,
          onEnter: () => animateFrom(elem),
          onEnterBack: () => animateFrom(elem, -1),
          onLeave: () => hide(elem),
        });
      }
    );
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
        <div className="scale-50 drop-shadow-lg">
          <img
            src={image}
            alt="cintia-profile"
            className="w-full rounded-full bg-white"
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
          <div className="flex my-2 gap-6">
            {bubble[1]?.map((item: any, i: number) => (
              <Bubble key={i} link={item.link} name={item.alt} color={color} />
            ))}
          </div>
          <h1 className="text-center my-4 font-bold text-3xl">Customize UI</h1>
          <div className="flex my-2 gap-8">
            {bubble[0]?.map((item: any, i: number) => (
              <Bubble key={i} link={item.link} name={item.alt} color={color} />
            ))}
          </div>
          <h1 className="text-center my-4 font-bold text-3xl">Animation</h1>
          <div className="flex my-2 gap-2">
            {bubble[2]?.map((item: any, i: number) => (
              <Bubble key={i} link={item.link} name={item.alt} color={color} />
            ))}
          </div>
        </div>
      )}
      <div className={`w-1/2 mr-20 gs_reveal mx-5`}>
        <h1
          className={`uppercase text-4xl font-bold sm:text-lg ${
            reverse && "text-right"
          }`}
        >
          {title}
        </h1>
        <p
          className={`font-medium text-xl text-gray-800 sm:text-sm ${
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
