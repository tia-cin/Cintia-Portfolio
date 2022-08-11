import React, { FC } from "react";
import { skills } from "../../types";
// MUI
import { Grid } from "@mui/material";
// icons
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PaletteIcon from "@mui/icons-material/Palette";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Skill } from "../Skill";

export const Skills: FC = () => {
  return (
    <div>
      <Grid container>
        <Skill data={skills.design} title="Design" color="#51ABB2" />
        <Skill data={skills.soft} title="Soft Skills" color="" />
      </Grid>
    </div>
  );
};
