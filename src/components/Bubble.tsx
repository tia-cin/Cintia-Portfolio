import React, { FC } from "react";
// MUI
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

interface BubbleProps {
  link: string;
  logo: string;
  alt: string;
  color: string;
}

const Bubble: FC<BubbleProps> = ({ link, logo, alt, color }) => {
  const GridItem = styled(Grid)`
    margin: 2em;
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
    <GridItem item>
      <a href={link}>
        <Grid
          item
          className="circle animated"
          id={(Math.random() * 5 + 2).toString()}
        >
          <div>
            <img src={logo} alt={alt} />
          </div>
          <p>{alt}</p>
        </Grid>
      </a>
    </GridItem>
  );
};

export default Bubble;
