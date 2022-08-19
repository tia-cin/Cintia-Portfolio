import React, { FC } from "react";
import { projects } from "../types";
// components
import { Cards } from "./Cards";
// MUI
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface ExperienceProps {
  colors: Array<string>;
}

const StyledGrid = styled(Grid)`
  height: 100vh;
  margin: 6em 0;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    height: 300vh;
  }
`;

export const Experience: FC<ExperienceProps> = ({ colors }) => {
  return (
    <StyledGrid container justifyContent="space-evenly">
      <Grid item container justifyContent="center">
        <Typography variant="h2">Check out some of my Projects</Typography>
      </Grid>
      {projects.map((p, i) => {
        return (
          <Cards
            key={i}
            link={p.link}
            logo={p.logo}
            alt={p.alt}
            title={p.title}
            description={p.description}
            color={colors[Math.floor(Math.random() * 4)]}
          />
        );
      })}
    </StyledGrid>
  );
};
