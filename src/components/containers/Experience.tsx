import React, { FC } from "react";
import { Cards } from "../Cards";
// MUI
import { Grid } from "@mui/material";
import { projects } from "../../types";

export const Experience: FC = () => {
  const colors = ["#ffce6d", "#51ABB2", "#F7B9A1", "#51ABB2"];
  return (
    <div>
      <Grid container direction="row" justifyContent="space-evenly">
        {projects.map((p, i) => {
          return (
            <Cards
              key={i}
              link={p.link}
              logo={p.logo}
              alt={p.alt}
              title={p.title}
              description={p.description}
              color={colors[i]}
            />
          );
        })}
      </Grid>
    </div>
  );
};
