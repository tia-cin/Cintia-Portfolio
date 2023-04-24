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

    const container = document.querySelector("#content");
    const sections = gsap.utils.toArray("#card");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 5,
        snap: 1 / (sections.length - 1),
        end: () =>
          (document.querySelector("#projects-container") as HTMLElement)
            .offsetWidth,
      },
    });
  }, []);
  return (
    <div id="projects-container" className="h-screen overflow-hidden">
      <div
        id="content"
        className="overflow-hidden flex relative h-screen"
        style={{ width: "400%" }}
      >
        {projects.map((p: ProjectItem, i: number) => (
          <Cards
            alt={p.alt}
            description={p.description}
            link={p.link}
            landing={p.landing}
            title={p.title}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
