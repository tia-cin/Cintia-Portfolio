import React, { FC } from "react";
// MUI
import { Grid, TextField } from "@mui/material";

interface InputsProps {
  title: string;
  name: string;
  label: string;
}

export const Inputs: FC<InputsProps> = ({ title, name, label }) => {
  return (
    <Grid container item xs={6}>
      <Grid>{title}</Grid>
      <Grid item>
        <TextField
          name={name}
          id="input-with-sx"
          label={label}
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};
