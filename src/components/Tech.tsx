import React, { FC } from "react";
import { CircleItem } from "./CircleItem";
import { technologies } from "../types";
// MUI
import { Grid, Typography } from "@mui/material";

interface TechProps {
  colors: Array<string>;
}

export const Tech: FC<TechProps> = ({ colors }) => {
  return (
    <Grid container sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid item container spacing={8} justifyContent="center">
        <Grid item container justifyContent="center">
          <Typography variant="h3">The Tech-Stack I use</Typography>
        </Grid>
        {technologies.map((e, i) => (
          <CircleItem
            key={i}
            alt={e.alt}
            logo={e.logo}
            link={e.link}
            color={colors[Math.floor(Math.random() * 4)]}
          />
        ))}
      </Grid>
    </Grid>
  );
};
