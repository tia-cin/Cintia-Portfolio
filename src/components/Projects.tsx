import React, { FC } from "react";
import { projects } from "../types";
import { Link } from "react-router-dom";
// MUI
import {
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const Projects: FC = () => {
  return (
    <Grid container direction="row">
      {projects.map((p, i) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={i}>
            <Grid item>
              <CardMedia component="img" image={p.logo} alt={p.alt} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <Link to={p.link}>
                <Button size="small" color="primary">
                  Check it out
                </Button>
              </Link>
            </Grid>
          </Card>
        );
      })}
    </Grid>
  );
};
