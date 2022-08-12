import React, { FC } from "react";
import { Link } from "react-router-dom";
// MUI
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

interface CircleGridItemProps {
  data: Array<any>;
  color: string;
}

export const CircleGridItem: FC<CircleGridItemProps> = ({ data, color }) => {
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
    <GridItem item container justifyContent="center" direction="column">
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
                  <img src={d.logo} alt={d.alt} />
                </div>
                <p>{d.alt}</p>
              </Grid>
            </a>
          );
        })}
      </Grid>
    </GridItem>
  );
};
