import React from "react";
import { Cards } from "./Displayed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC<{
  projects: any[];
}> = ({ projects }) => {
  React.useEffect(() => {
    let sections = gsap.utils.toArray("#card");

    // gsap.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: "#projects-container",
    //     pin: true,
    //     scrub: 1,
    //     snap: 1 / (sections.length - 1),
    //     end: "600vh",
    //   },
    // });
  }, []);
  return (
    <div
      id="projects-container"
      // className="flex flex-col justify-center items-center relative w-full min-h-screen overflow-hidden"
      style={{ overscrollBehavior: "none" }}
    >
      {projects.map((p: any, i: number) => (
        <Cards
          alt={p.alt}
          color=""
          description={p.description}
          link={p.link}
          landing={p.landing}
          title={p.title}
          key={i}
        />
      ))}
    </div>
  );
};

export default Projects;
