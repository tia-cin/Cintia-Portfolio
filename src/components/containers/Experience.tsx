import React, { FC } from "react";
import { Projects } from "../Projects";
// MUI
import { Grid } from "@mui/material";
import { projects } from "../../types";

export const Experience: FC = () => {
  const colors = ["#ffce6d", "#51ABB2", "#F7B9A1", "#51ABB2"];
  return (
    <div>
      <Grid container direction="row" justifyContent="space-evenly">
        {projects.map((p, i) => {
          return (
            <Projects
              key={i}
              link={p.link}
              logo={p.logo}
              alt={p.alt}
              title={p.title}
              description={p.description}
              color={colors[i]}
            />
          );
        })}
      </Grid>
    </div>
  );
};
