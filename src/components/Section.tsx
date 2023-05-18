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
        <div className="scale-50 drop-shadow-lg sm:hidden">
          <img
            src={image}
            alt="cintia-profile"
            className="w-full rounded-full bg-white"
          />
        </div>
      )}
      {bubble && (
        <div className="grid grid-cols-3 gap-10 mr-20 sm:mr-0 sm:gap-1 sm:hidden">
          {bubble.map((item: any, i: number) => (
            <Bubble
              key={i}
              {...item}
              color={colors[Math.floor(Math.random() * colors.length)]}
            />
          ))}
        </div>
      )}
      <div className={`w-1/2 mr-20 gs_reveal mx-5 sm:text-center`}>
        <h1
          className={`uppercase text-4xl font-bold sm:text-lg ${
            reverse && "text-right sm:text-center"
          }`}
        >
          {title}
        </h1>
        <p
          className={`font-medium text-xl text-gray-800 sm:text-sm ${
            reverse && "text-right sm:text-center"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Section;
