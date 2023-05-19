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
gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC<{
  projects: any[];
}> = ({ projects }) => {
  React.useEffect(() => {
    const container = document.querySelector(
      "#projects-container"
    ) as HTMLElement;
    const sections = gsap.utils.toArray("#card") as HTMLElement[];

    let to = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);
  return (
    <div id="projects-container" className="h-screen overflow-hidden">
      <div
        id="content"
        className="overflow-hidden flex relative"
        style={{ width: "400%" }}
      >
        {projects.map((p: ProjectItem, i: number) => (
          <Cards {...p} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
