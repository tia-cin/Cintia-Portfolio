import React, { FC } from "react";
import { CircleItem } from "./CircleItem";
import { technologies, skills } from "../info";
// MUI
import { Grid, Typography } from "@mui/material";
// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface TechProps {
  colors: Array<string>;
}

export const Tech: FC<TechProps> = ({ colors }) => {
  return (
    <Grid container sx={{ height: "150vh", overflow: "hidden" }}>
      <Grid item container spacing={8} justifyContent="center">
        <Grid item container justifyContent="center">
          <Typography variant="h3">The Tech-Stack I use</Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">Frontend</Typography>
          </Grid>
          {technologies.frontend.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">Styling</Typography>
          </Grid>
          {technologies.style.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">Desing Tools</Typography>
          </Grid>
          {skills.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">And more</Typography>
          </Grid>
          {technologies.others.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item>
          <KeyboardArrowDownIcon sx={{ fontSize: "5em" }} />
        </Grid>
      </Grid>
    </Grid>
  );
};
