import React, { FC } from "react";
import { Links } from "../Links";
// MUI
import { Stack } from "@mui/material";
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
        <Links link="/" name="Home" icon={<HomeIcon />} />
        <Links link="/tech" name="Technologies" icon={<HubRoundedIcon />} />
        <Links
          link="/projects"
          name="Projects"
          icon={<WorkspacePremiumRoundedIcon />}
        />
        <Links link="/skills" name="Skills" icon={<WorkRoundedIcon />} />
        <Links link="/contact" name="Contact" icon={<ChatIcon />} />
      </Stack>
    </nav>
  );
};
