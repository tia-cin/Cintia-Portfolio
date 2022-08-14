import React, { FC } from "react";
import { social } from "../info";
import { Links } from "./Links";
// mui
import { Grid, Typography } from "@mui/material";
// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// svg
import wave from "../assets/svgs/wave.png";

export const Footer: FC = () => {
  return (
    <footer>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-evenly"
        sx={{
          py: "5em",
          backgroundImage: `url(${wave})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Links
          link=""
          href={social[0].link}
          name={social[0].alt}
          icon={<LinkedInIcon sx={{ fontSize: "5em" }} />}
        />
        <Links
          link=""
          href={social[1].link}
          name={social[1].alt}
          icon={<GitHubIcon sx={{ fontSize: "5em" }} />}
        />
        <Grid item container justifyContent="center">
          <Typography variant="subtitle1">Made with 💛 by Cintia</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
