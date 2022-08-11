import React, { FC } from "react";
// MUI
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

interface SkillProps {
  data: Array<any>;
  title: string;
  color: string;
}

export const Skill: FC<SkillProps> = ({ data, title, color }) => {
  const GridItem = styled(Grid)`
    a {
      text-decoration: none;
    }
    .circle > div {
      background: ${color};
      border-radius: 50%;
      padding: 1em;
      width: 50px;
      height: 50px;
    }
    p {
      margin: 0.5em;
      font-family: sans-serif;
      text-align: center;
      color: #fff;
    }
    .circle:hover p {
      transition: 1s;
      color: #191919;
    }
    img {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: contain;
    }
  `;
  return (
    <GridItem container item justifyContent="center" direction="column">
      <Grid>{title}</Grid>
      <Grid item container direction="row" justifyContent="space-evenly">
        {data.map((d, i) => {
          return (
            <a href={d.link} key={i}>
              <Grid
                item
                className="circle animated"
                id={(Math.random() * 5 + 2).toString()}
              >
                <div>
                  <img src={d.image} alt={d.name} />
                </div>
                <p>{d.name}</p>
              </Grid>
            </a>
          );
        })}
      </Grid>
    </GridItem>
  );
};
