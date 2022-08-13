import React, { FC } from "react";
import { Cards } from "./Cards";
// MUI
import { Grid, Typography } from "@mui/material";
import { projects } from "../info";

interface ExperienceProps {
  colors: Array<string>;
}

export const Experience: FC<ExperienceProps> = ({ colors }) => {
  return (
    <Grid
      sx={{ height: "100vh" }}
      container
      direction="row"
      justifyContent="space-evenly"
    >
      <Grid item container justifyContent="center">
        <Typography variant="h3">Check out my Projects</Typography>
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
