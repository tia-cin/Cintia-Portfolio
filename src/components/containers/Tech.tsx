import React, { FC } from "react";
import { CircleItem } from "../CircleItem";
import { technologies } from "../../types";
// MUI
import { Grid } from "@mui/material";

interface TechProps {
  colors: Array<string>;
}

export const Tech: FC<TechProps> = ({ colors }) => {
  return (
    <Grid container>
      <Grid item container justifyContent="space-evenly">
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
