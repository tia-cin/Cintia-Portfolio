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

interface ProjectsProps {
  link: string;
  logo: string;
  alt: string;
  title: string;
  description: string;
}
export const Projects: FC<ProjectsProps> = ({
  link,
  logo,
  alt,
  title,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Grid item>
        <CardMedia component="img" image={logo} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item>
        <Link to={link}>
          <Button size="small" color="primary">
            Check it out
          </Button>
        </Link>
      </Grid>
    </Card>
  );
};
