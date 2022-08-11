import React, { FC } from "react";
import { TechStack } from "../TechStack";
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
        <TechStack data={first} color="#ffce6d" />
        <TechStack data={second} color="#ED5B2D" />
        <TechStack data={third} color="#F7B9A1" />
        <TechStack data={fourth} color="#51ABB2" />
      </Grid>
    </div>
  );
};
