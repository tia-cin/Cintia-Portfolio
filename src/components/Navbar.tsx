import React, { FC } from "react";
import { Links } from "./";
import { Grid } from "@mui/material";
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
        sx={{ position: "fixed", zIndex: 1 }}
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
