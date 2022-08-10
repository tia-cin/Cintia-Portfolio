import React, { FC } from "react";
import { Link } from "react-router-dom";
// MUI
import Grid from "@mui/material/Grid";
// icons
import HomeIcon from "@mui/icons-material/HomeRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

export const Navbar: FC = () => {
  return (
    <Grid container>
      <Grid item>
        <Link to="/">
          <button>
            <HomeIcon />
          </button>
          <p>Home</p>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/tech">
          <button>
            <HubRoundedIcon />
          </button>
          <p>Technologies</p>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/projects">
          <button>
            <WorkspacePremiumRoundedIcon />
          </button>
          <p>Projects</p>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/skills">
          <button>
            <WorkRoundedIcon />
          </button>
          <p>Skills</p>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/contact">
          <button>
            <WorkRoundedIcon />
          </button>
          <p>Contact</p>
        </Link>
      </Grid>
    </Grid>
  );
};
