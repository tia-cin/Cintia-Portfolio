import React from "react";
import { Cards } from "./Displayed";

const Projects: React.FC<{
  projects: any[];
}> = ({ projects }) => {
  return (
    <div className="flex flex-col justify-center items-center relative w-full min-h-screen overflow-hidden">
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
