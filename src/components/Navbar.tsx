import React, { FC } from "react";
// MUI
import Grid from "@mui/material/Grid";
// icons
import HomeIcon from "@mui/icons-material/HomeRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

export const Navbar: FC = () => {
  return (
    <Grid>
      <Grid item>
        <button>
          <HomeIcon />
        </button>
        <p>Home</p>
      </Grid>
      <Grid item>
        <button>
          <HubRoundedIcon />
        </button>
        <p>Technologies</p>
      </Grid>
      <Grid item>
        <button>
          <WorkspacePremiumRoundedIcon />
        </button>
        <p>Projects</p>
      </Grid>
      <Grid item>
        <button>
          <WorkRoundedIcon />
        </button>
        <p>Skills</p>
      </Grid>
    </Grid>
  );
};
