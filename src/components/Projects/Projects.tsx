import React, { FC } from "react";
import { projects } from "../../types";

export const Projects: FC = () => {
  return (
    <div>
      {projects.map((p, i) => {
        return <div key={i}>{p.title}</div>;
      })}
    </div>
  );
};
