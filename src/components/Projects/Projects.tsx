import React, { FC } from "react";
import { projects } from "../../types";
import { Link } from "react-router-dom";
// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

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
