import React, { FC } from "react";
import { Cards } from "./Cards";
// MUI
import { Grid } from "@mui/material";
import { projects } from "../types";

interface ExperienceProps {
  colors: Array<string>;
}

export const Experience: FC<ExperienceProps> = ({ colors }) => {
  return (
    <Grid
      sx={{ height: "90vh" }}
      container
      direction="row"
      justifyContent="space-evenly"
    >
      {projects.map((p, i) => {
        return (
          <Cards
            key={i}
            link={p.link}
            logo={p.logo}
            alt={p.alt}
            title={p.title}
            description={p.description}
            color={colors[Math.floor(Math.random() * 4)]}
          />
        );
      })}
    </Grid>
  );
};
