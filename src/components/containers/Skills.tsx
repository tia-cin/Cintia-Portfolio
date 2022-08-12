import React, { FC } from "react";
import { skills } from "../../types";
import { Links } from "../Links";
import { CircleItem } from "../CircleItem";
// MUI
import { Grid } from "@mui/material";
// icons
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PaletteIcon from "@mui/icons-material/Palette";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

interface SkillsProps {
  colors: Array<string>;
}

export const Skills: FC<SkillsProps> = ({ colors }) => {
  const icons = [
    <GroupsIcon sx={{ fontSize: "2.5em" }} />,
    <LightbulbIcon sx={{ fontSize: "2.5em" }} />,
    <ElectricBoltIcon sx={{ fontSize: "2.5em" }} />,
    <PaletteIcon sx={{ fontSize: "2.5em" }} />,
    <QuestionMarkIcon sx={{ fontSize: "2.5em" }} />,
    <ConnectWithoutContactIcon sx={{ fontSize: "2.5em" }} />,
  ];
  return (
    <div>
      <Grid container>
        <Grid item container direction="row" justifyContent="space-evenly">
          {skills.design.map((s, i) => (
            <CircleItem
              key={i}
              alt={s.alt}
              logo={s.logo}
              link={s.link}
              color={colors[Math.floor(Math.random() * 4)]}
            />
          ))}
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {skills.soft.map((s, i) => (
            <Links key={i} link="" href="" icon={icons[i]} name={s.name} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
