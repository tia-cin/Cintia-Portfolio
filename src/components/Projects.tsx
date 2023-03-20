import React from "react";
import { Cards } from "./Displayed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

interface ProjectItem {
  alt: string;
  description: string;
  link: string;
  landing: string;
  title: string;
}

const Projects: React.FC<{
  projects: any[];
}> = ({ projects }) => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray("#card");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      // duration: 10,
      scrollTrigger: {
        trigger: "#projects-container",
        toggleActions: "restart pause reverse pause",
        start: "top top",
        // pin: true,
        scrub: 5,
        //   snap: 1 / (sections.length - 1),
        //   end: "+=3500",
        markers: true,
      },
    });
  }, []);
  return (
    <div
      id="projects-container"
      className="flex "
      style={{ overscrollBehavior: "none", width: "400%" }}
    >
      {projects.map((p: ProjectItem, i: number) => (
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
