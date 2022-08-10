import React, { FC } from "react";
import { skills } from "../../types";
import { Link } from "react-router-dom";
// MUI
import { Grid } from "@mui/material";
// icons
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PaletteIcon from "@mui/icons-material/Palette";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export const Skills: FC = () => {
  return (
    <div>
      <Grid container>
        <Grid container item>
          {skills.design.map((d, i) => {
            return (
              <Link to={d.link} key={i}>
                <Grid item>
                  <img src={d.image} alt={d.name} />
                  {d.name}
                </Grid>
              </Link>
            );
          })}
        </Grid>
        <Grid container item>
          {skills.soft.map((d, i) => {
            return (
              <Grid item key={i}>
                {d.name}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};
