import React, { FC } from "react";
import { Cards } from "../Cards";
// MUI
import { Grid } from "@mui/material";
import { projects } from "../../types";

interface ExperienceProps {
  colors: Array<string>;
}

export const Experience: FC<ExperienceProps> = ({ colors }) => {
  return (
    <div>
      <Grid container direction="row" justifyContent="space-evenly">
        {projects.map((p, i) => {
          return (
            <Cards
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
