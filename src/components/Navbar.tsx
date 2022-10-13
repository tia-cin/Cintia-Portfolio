import React, { FC } from "react";
// components
import { Links } from "./";
// MUI
import { Grid } from "@mui/material";
// icons
import HomeIcon from "@mui/icons-material/HomeRounded";
import ChatIcon from "@mui/icons-material/Chat";

const Navbar: FC = () => {
  return (
    <nav>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ position: "fixed" }}
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

export default Navbar;
