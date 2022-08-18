import React, { FC } from "react";
import { projects } from "../types";
// components
import { Cards } from "./Cards";
// MUI
import { Grid, Typography } from "@mui/material";

interface ExperienceProps {
  colors: Array<string>;
}

export const Experience: FC<ExperienceProps> = ({ colors }) => {
  return (
    <Grid
      sx={{ height: "100vh", my: "6em" }}
      container
      direction="row"
      justifyContent="space-evenly"
    >
      <Grid item container justifyContent="center">
        <Typography variant="h2">Check out some of my Projects</Typography>
      </Grid>
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
