import React, { FC } from "react";
import { CircleGridItem } from "../CircleGridItem";
import { technologies } from "../../types";
// MUI
import { Grid } from "@mui/material";

export const Tech: FC = () => {
  const first = technologies.slice(0, 5);
  const second = technologies.slice(5, 10);
  const third = technologies.slice(10, 15);
  const fourth = technologies.slice(15, 21);
  return (
    <div>
      <Grid container>
        <CircleGridItem data={first} color="#ffce6d" />
        <CircleGridItem data={second} color="#ED5B2D" />
        <CircleGridItem data={third} color="#F7B9A1" />
        <CircleGridItem data={fourth} color="#51ABB2" />
      </Grid>
    </div>
  );
};
