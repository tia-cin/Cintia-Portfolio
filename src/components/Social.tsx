import React, { FC } from "react";
import { social } from "../types";
import { Link } from "react-router-dom";
// MUI
import { Stack } from "@mui/material";
// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Social: FC = () => {
  return (
    <Stack>
      {social.map((s, i) => {
        return (
          <Link to={s.link} key={i}>
            <div>
              {s.alt === "Github" ? <GitHubIcon /> : <LinkedInIcon />}
              <small>{s.alt}</small>
            </div>
          </Link>
        );
      })}
    </Stack>
  );
};
