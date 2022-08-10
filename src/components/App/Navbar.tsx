import React, { FC } from "react";
import { Link } from "react-router-dom";
// MUI
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// icons
import HomeIcon from "@mui/icons-material/HomeRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import ChatIcon from "@mui/icons-material/Chat";

export const Navbar: FC = () => {
  return (
    <nav>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <Link to="/">
            <button>
              <HomeIcon />
            </button>
            <p>Home</p>
          </Link>
        </Box>
        <Box>
          <Link to="/tech">
            <button>
              <HubRoundedIcon />
            </button>
            <p>Technologies</p>
          </Link>
        </Box>
        <Box>
          <Link to="/projects">
            <button>
              <WorkspacePremiumRoundedIcon />
            </button>
            <p>Projects</p>
          </Link>
        </Box>
        <Box>
          <Link to="/skills">
            <button>
              <WorkRoundedIcon />
            </button>
            <p>Skills</p>
          </Link>
        </Box>
        <Box>
          <Link to="/contact">
            <button>
              <ChatIcon />
            </button>
            <p>Contact</p>
          </Link>
        </Box>
      </Stack>
    </nav>
  );
};
