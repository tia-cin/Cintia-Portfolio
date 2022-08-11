import React, { FC } from "react";
import { Link } from "react-router-dom";
// MUI
import { Box } from "@mui/material";

interface LinksProps {
  link: string;
  name: string;
  icon: any;
}

export const Links: FC<LinksProps> = ({ link, name, icon }) => {
  return (
    <Box>
      <Link to={link}>
        <button>{icon}</button>
        <p>{name}</p>
      </Link>
    </Box>
  );
};
