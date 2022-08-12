import React, { FC } from "react";
import { CircleItem } from "../CircleItem";
import { technologies } from "../../types";
// MUI
import { Grid } from "@mui/material";

interface TechProps {
  colors: Array<string>;
}

export const Tech: FC<TechProps> = ({ colors }) => {
  const first = technologies.slice(0, 5);
  const second = technologies.slice(5, 10);
  const third = technologies.slice(10, 15);
  const fourth = technologies.slice(15, 21);
  return (
    <Grid container>
      <Grid item container justifyContent="space-evenly">
        {first.map((e, i) => (
          <CircleItem
            key={i}
            alt={e.alt}
            logo={e.logo}
            link={e.link}
            color={colors[i]}
          />
        ))}
      </Grid>
      <Grid item container justifyContent="space-evenly">
        {second.map((e, i) => (
          <CircleItem
            key={i}
            alt={e.alt}
            logo={e.logo}
            link={e.link}
            color={colors[i]}
          />
        ))}
      </Grid>
      <Grid item container justifyContent="space-evenly">
        {third.map((e, i) => (
          <CircleItem
            key={i}
            alt={e.alt}
            logo={e.logo}
            link={e.link}
            color={colors[i]}
          />
        ))}
      </Grid>
      <Grid item container justifyContent="space-evenly">
        {fourth.map((e, i) => (
          <CircleItem
            key={i}
            alt={e.alt}
            logo={e.logo}
            link={e.link}
            color={colors[i]}
          />
        ))}
      </Grid>
    </Grid>
  );
};
