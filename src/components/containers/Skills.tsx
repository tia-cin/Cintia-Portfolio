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
import { Links } from "../Links";
import { CircleGridItem } from "../CircleGridItem";

export const Skills: FC = () => {
  return (
    <div>
      <Grid container>
        <CircleGridItem data={skills.design} color="#51ABB2" />
        <Grid item container justifyContent="center">
          <Links link="" href="" icon={<GroupsIcon />} name="Team Player" />
          <Links
            link=""
            href=""
            icon={<LightbulbIcon sx={{ fontSize: "2.5em" }} />}
            name="Problem solver"
          />
          <Links
            link=""
            href=""
            icon={<ElectricBoltIcon sx={{ fontSize: "2.5em" }} />}
            name="Fast Learner"
          />
          <Links
            link=""
            href=""
            icon={<PaletteIcon sx={{ fontSize: "2.5em" }} />}
            name="Creative"
          />
          <Links
            link=""
            href=""
            icon={<QuestionMarkIcon sx={{ fontSize: "2.5em" }} />}
            name="Curious"
          />
        </Grid>
      </Grid>
    </div>
  );
};
