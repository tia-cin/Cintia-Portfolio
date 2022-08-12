import React, { FC } from "react";
import { Links } from "../Links";
// MUI
import { Grid } from "@mui/material";
// icons
import HomeIcon from "@mui/icons-material/HomeRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import ChatIcon from "@mui/icons-material/Chat";

export const Navbar: FC = () => {
  return (
    <nav>
      <Grid
        container
        sx={{ mt: "1em" }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Links
          link="/"
          href=""
          name="Home"
          icon={<HomeIcon sx={{ fontSize: "2.5em" }} />}
        />
        <Links
          link="/tech"
          href=""
          name="Tech"
          icon={<HubRoundedIcon sx={{ fontSize: "2.5em" }} />}
        />
        <Links
          link="/projects"
          href=""
          name="Projects"
          icon={<WorkspacePremiumRoundedIcon sx={{ fontSize: "2.5em" }} />}
        />
        <Links
          link="/skills"
          href=""
          name="Skills"
          icon={<WorkRoundedIcon sx={{ fontSize: "2.5em" }} />}
        />
        <Links
          link="/contact"
          href=""
          name="Contact"
          icon={<ChatIcon sx={{ fontSize: "2.5em" }} />}
        />
      </Grid>
    </nav>
  );
};
