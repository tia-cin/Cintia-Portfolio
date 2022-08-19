import React, { FC } from "react";
// MUI
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledGrid = styled(Grid)`
  height: 100vh;
  padding: 0 3em;
  margin: 10em 0;
  background: #ffce6d;
  @media only screen and (max-width: 600px) {
    h3 {
      font-size: 1.8em;
      width: 10em;
    }
    h6 {
      width: 20em;
    }
  }
`;

export const Introduction: FC = () => {
  return (
    <StyledGrid
      container
      alignItems="center"
      direction="column"
      justifyContent="space-around"
    >
      <Grid item sx={{ width: "30em" }}>
        <Typography variant="h3">It's nice to meet you!</Typography>
        <Typography variant="subtitle1">
          I'm an independent IT student with strong passion for development.
          Started with Web Development two years ago and look forward to keep
          expanding my knowledge. <br />
          <br />
          Interested in participate in projects where I can share my skills,
          improve them, and even learn new ones.
        </Typography>
      </Grid>
      <Grid item sx={{ width: "30em" }}>
        <Typography variant="h3">Here is a little more about me...</Typography>
      </Grid>
    </StyledGrid>
  );
};
