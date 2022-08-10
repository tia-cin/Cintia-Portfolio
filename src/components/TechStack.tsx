import React, { FC } from "react";
import { technologies } from "../types";
// MUI
import { Grid } from "@mui/material";

export const TechStack: FC = () => {
  return (
    <Grid container>
      <Grid item container justifyContent="center">
        {technologies.frontend.map((t, i) => {
          return (
            <Grid item key={i}>
              <img width="50" height="50" src={t.logo} alt={t.alt} />
              <small>{t.alt}</small>
            </Grid>
          );
        })}
      </Grid>
      <Grid item container justifyContent="center">
        {technologies.ui.map((t, i) => {
          return (
            <Grid item key={i}>
              <img width="50" height="50" src={t.logo} alt={t.alt} />
              <small>{t.alt}</small>
            </Grid>
          );
        })}
      </Grid>
      <Grid item container justifyContent="center">
        {technologies.backend.map((t, i) => {
          return (
            <Grid item key={i}>
              <img width="50" height="50" src={t.logo} alt={t.alt} />
              <small>{t.alt}</small>
            </Grid>
          );
        })}
      </Grid>
      <Grid item container justifyContent="center">
        {technologies.testing.map((t, i) => {
          return (
            <Grid item key={i}>
              <img width="50" height="50" src={t.logo} alt={t.alt} />
              <small>{t.alt}</small>
            </Grid>
          );
        })}
      </Grid>
      <Grid item container justifyContent="center">
        {technologies.database.map((t, i) => {
          return (
            <Grid item key={i}>
              <img width="50" height="50" src={t.logo} alt={t.alt} />
              <small>{t.alt}</small>
            </Grid>
          );
        })}
      </Grid>
      <Grid item container justifyContent="center">
        {technologies.others.map((t, i) => {
          return (
            <Grid item key={i}>
              <img width="50" height="50" src={t.logo} alt={t.alt} />
              <small>{t.alt}</small>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
