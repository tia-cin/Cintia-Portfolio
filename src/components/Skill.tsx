import React, { FC } from "react";
import { Link } from "react-router-dom";
// MUI
import { Grid } from "@mui/material";

interface SkillProps {
  data: Array<any>;
  title: string;
}

export const Skill: FC<SkillProps> = ({ data, title }) => {
  return (
    <Grid container item>
      <Grid>{title}</Grid>
      {data.map((d, i) => {
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
  );
};
