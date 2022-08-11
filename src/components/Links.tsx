import React, { FC } from "react";
import { Link } from "react-router-dom";
// MUI
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledGridItems = styled(Grid)`
  p {
    margin: 0.5em;
    font-family: sans-serif;
    text-align: center;
    color: #fff;
  }
  a:hover p {
    transition: 1s;
    color: #191919;
  }
`;

interface LinksProps {
  link: string;
  name: string;
  icon: any;
}

export const Links: FC<LinksProps> = ({ link, name, icon }) => {
  return (
    <StyledGridItems item>
      <Link to={link} style={{ textDecoration: "none" }}>
        <Button variant="text" sx={{ color: "#191919" }}>
          {icon}
        </Button>
        <p>{name}</p>
      </Link>
    </StyledGridItems>
  );
};
