import React, { FC } from "react";
import { technologies } from "../types";
// components
import { CircleItem } from "./CircleItem";
// MUI
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface TechProps {
  colors: Array<string>;
}

const StyledGrid = styled(Grid)`
  height: 180vh;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    height: 300vh;
  }
`;

export const Tech: FC<TechProps> = ({ colors }) => {
  return (
    <StyledGrid container>
      <Grid item container spacing={8} justifyContent="center">
        <Grid item container justifyContent="center">
          <Typography variant="h2">My Tech-Stack </Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">Frontend</Typography>
          </Grid>
          {technologies.frontend.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">Styling</Typography>
          </Grid>
          {technologies.style.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">Desing Tools</Typography>
          </Grid>
          {technologies.design.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item container justifyContent="center">
            <Typography variant="h3">And more</Typography>
          </Grid>
          {technologies.others.map((e, i) => (
            <CircleItem
              key={i}
              alt={e.alt}
              logo={e.logo}
              link={e.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid item>
          <KeyboardArrowDownIcon sx={{ fontSize: "5em" }} />
        </Grid>
      </Grid>
    </StyledGrid>
  );
};
