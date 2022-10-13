import React, { FC } from "react";
// MUI
import { Typography, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledGrid = styled(Grid)`
  margin: 1em 0;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    h5 {
      text-align: right;
    }
    .animated {
      opacity: 0;
    }
  }
`;

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
}

const Inputs: FC<InputsProps> = ({ title, name }) => {
  return (
    <StyledGrid
      container
      item
      xs={6}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item>
        <StyledTextField
          rows={title === "Message" ? 8 : 0}
          fullWidth
          multiline
          sx={{ margin: "0", width: "25em" }}
          name={name}
          id="input-with-sx"
          color="success"
        />
      </Grid>
    </StyledGrid>
  );
};

export default Inputs;
