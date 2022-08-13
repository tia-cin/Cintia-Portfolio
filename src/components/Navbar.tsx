import React, { FC } from "react";
import { Links } from "./Links";
// MUI
import { Grid } from "@mui/material";
// icons
import HomeIcon from "@mui/icons-material/HomeRounded";
import ChatIcon from "@mui/icons-material/Chat";

export const Navbar: FC = () => {
  return (
    <nav>
      <Grid
        container
        sx={{ top: 10, position: "fixed" }}
        direction="row"
        justifyContent="space-between"
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
          link="/contact"
          href=""
          name="Contact"
          icon={<ChatIcon sx={{ fontSize: "2.5em" }} />}
        />
      </Grid>
    </nav>
  );
};
