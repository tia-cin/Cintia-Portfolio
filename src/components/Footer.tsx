import React, { FC } from "react";
import { social } from "../types";
import { Links } from "./Links";
// mui
import { Grid } from "@mui/material";
// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer: FC = () => {
  return (
    <footer>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        sx={{ margin: "2em 0" }}
      >
        <Links
          link=""
          href={social[0].link}
          name={social[0].alt}
          icon={<LinkedInIcon />}
        />
        <Links
          link=""
          href={social[1].link}
          name={social[1].alt}
          icon={<GitHubIcon />}
        />
      </Grid>
    </footer>
  );
};
