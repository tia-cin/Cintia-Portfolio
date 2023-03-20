import React from "react";
import { Cards } from "./Displayed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC<{
  projects: any[];
}> = ({ projects }) => {
  React.useEffect(() => {
    gsap.to("#projects-container", {
      scrollTrigger: {
        scroller: "#projects-container",
        scrub: true,
        trigger: "#card",
        pin: true,
        start: "top top",
        end: "600vh",
      },
      ease: "none",
    });
  }, []);
  return (
    <div
      id="projects-container"
      className="flex "
      style={{ overscrollBehavior: "none", width: "400%" }}
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
