import React, { FC } from "react";
import { technologies } from "../types";
// MUI
import { Grid } from "@mui/material";

interface TechStackProps {
  data: Array<any>;
  title: string;
}

export const TechStack: FC<TechStackProps> = ({ data, title }) => {
  return (
    <Grid item container justifyContent="center">
      <Grid>{title}</Grid>
      {data.map((d, i) => {
        return (
          <Grid item key={i}>
            <img width="50" height="50" src={d.logo} alt={d.alt} />
            <small>{d.alt}</small>
          </Grid>
        );
      })}
    </Grid>
  );
};
