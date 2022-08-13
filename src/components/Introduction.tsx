import React, { FC } from "react";
// MUI
import { Grid, Typography } from "@mui/material";
// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Introduction: FC = () => {
  return (
    <Grid
      sx={{ height: "100vh", mx: "3em", my: "2em" }}
      container
      alignItems="center"
      direction="column"
      justifyContent="space-around"
    >
      <Grid item sx={{ width: "30em" }}>
        <Typography variant="h3">It's nice to meet you!</Typography>
        <Typography variant="subtitle1">
          Independent IT student with strong passion for development. Looking to
          participate in projects where I can share my skills, improve them, and
          even learn new ones.
        </Typography>
      </Grid>
      <Grid item sx={{ width: "30em" }}>
        <Typography variant="h3">Here is a little more about me...</Typography>
      </Grid>
      <Grid item>
        <KeyboardArrowDownIcon sx={{ fontSize: "5em" }} />
      </Grid>
    </Grid>
  );
};
