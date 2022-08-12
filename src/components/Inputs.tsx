import React, { FC } from "react";
// MUI
import { Typography, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)`
  label {
    transform: translateY(1em);
    margin: 0 0.5em;
  }
  div {
    margin: 0;
  }
`;

interface InputsProps {
  title: string;
  name: string;
  label: string;
}

export const Inputs: FC<InputsProps> = ({ title, name, label }) => {
  return (
    <Grid
      container
      item
      xs={6}
      alignItems="center"
      justifyContent="space-between"
      sx={{ margin: "1em 0" }}
    >
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item>
        <StyledTextField
          rows={title === "Message" ? 4 : 0}
          multiline
          sx={{ margin: "0" }}
          name={name}
          id="input-with-sx"
          label={label}
        />
      </Grid>
    </Grid>
  );
};
