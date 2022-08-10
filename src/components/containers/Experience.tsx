import React, { FC } from "react";
import { Projects } from "../Projects";
// MUI
import { Grid } from "@mui/material";
import { projects } from "../../types";

export const Experience: FC = () => {
  return (
    <div>
      <Grid container direction="row">
        {projects.map((p, i) => {
          return (
            <Projects
              key={i}
              link={p.link}
              logo={p.logo}
              alt={p.alt}
              title={p.title}
              description={p.description}
            />
          );
        })}
      </Grid>
    </div>
  );
};
