import React, { FC } from "react";
import { Experience } from "./Experience";
import { Profile } from "./Profile";
import { Tech } from "./Tech";
import { Skills } from "./Skills";
import { social } from "../types";
import { Links } from "./Links";
// mui
import { Grid } from "@mui/material";
// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface HomeProps {
  colors: Array<string>;
}

export const Home: FC<HomeProps> = ({ colors }) => {
  return (
    <div>
      <Profile />
      <Tech colors={colors} />
      <Experience colors={colors} />
      <Skills colors={colors} />
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
    </div>
  );
};
