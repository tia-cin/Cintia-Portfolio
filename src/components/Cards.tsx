import React, { FC } from "react";
// MUI
import {
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CardsProps {
  link: string;
  logo: string;
  alt: string;
  title: string;
  description: string;
  color: string;
}
export const Cards: FC<CardsProps> = ({
  link,
  logo,
  alt,
  title,
  description,
  color,
}) => {
  return (
    <Card sx={{ width: 345, backgroundColor: `${color}`, margin: "1em 0" }}>
      <Grid item>
        {logo && (
          <CardMedia
            component="img"
            image={logo}
            alt={alt}
            sx={{
              width: 100,
              height: 100,
              padding: "1em 7em 0",
            }}
          />
        )}
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
        <a href={link} style={{ textDecoration: "none" }}>
          <Button
            sx={{ margin: "2em 1em" }}
            size="small"
            variant="contained"
            color="primary"
          >
            Check it out
          </Button>
        </a>
      </Grid>
    </Card>
  );
};
