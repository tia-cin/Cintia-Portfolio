import React, { FC } from "react";
import { skills } from "../info";
import { CircleItem } from "./CircleItem";
// MUI
import { Grid, Typography } from "@mui/material";

interface SkillsProps {
  colors: Array<string>;
}

export const Skills: FC<SkillsProps> = ({ colors }) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item container direction="row" justifyContent="space-evenly">
        <Grid item container justifyContent="center">
          <Typography variant="h3">Some Design Tools</Typography>
        </Grid>
        {skills.design.map((s, i) => (
          <CircleItem
            key={i}
            alt={s.alt}
            logo={s.logo}
            link={s.link}
            color={colors[Math.floor(Math.random() * 4)]}
          />
        ))}
      </Grid>
    </Grid>
  );
};
