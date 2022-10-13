import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const Cards: FC<{
  link: string;
  logo: string;
  alt: string;
  title: string;
  description: string;
  color: string;
}> = ({ link, logo, alt, title, description, color }) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        backgroundColor: `${color}`,
        margin: "1em 0",
      }}
    >
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

export const Bubble: FC<{
  link: string;
  logo: string;
  alt: string;
  color: string;
}> = ({ link, logo, alt, color }) => {
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

const StyledGridItems = styled(Grid)`
  margin: 1em;
  p {
    margin: 0.5em;
    font-family: sans-serif;
    text-align: center;
    opacity: 0;
  }
  .contain:hover p {
    transition: 1s;
    color: #191919;
    opacity: 1;
  }
`;

export const Links: FC<{
  link: string;
  href: string;
  name: string;
  icon: any;
}> = ({ link, href, name, icon }) => {
  return (
    <StyledGridItems item>
      {link ? (
        <Link
          className="contain"
          to={link && link}
          style={{ textDecoration: "none", width: 0 }}
        >
          <Button variant="text" sx={{ color: "#191919" }}>
            {icon}
          </Button>
          <p>{name}</p>
        </Link>
      ) : href ? (
        <a
          className="contain"
          href={href}
          style={{ textDecoration: "none", width: 0 }}
        >
          <Button variant="text" sx={{ color: "#191919" }}>
            {icon}
          </Button>
          <p>{name}</p>
        </a>
      ) : (
        <div className="contain">
          <Button variant="text" sx={{ color: "#191919", width: 0 }}>
            {icon}
          </Button>
          <p>{name}</p>
        </div>
      )}
    </StyledGridItems>
  );
};

const StyledGrid = styled(Grid)`
  margin: 1em 0;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    h5 {
      text-align: right;
    }
    .animated {
      opacity: 0;
    }
  }
`;

const StyledTextField = styled(TextField)`
  label {
    transform: translateY(1em);
    margin: 0 0.5em;
  }
  div {
    margin: 0;
  }
`;

export const Inputs: FC<{
  title: string;
  name: string;
}> = ({ title, name }) => {
  return (
    <StyledGrid
      container
      item
      xs={6}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid item>
        <StyledTextField
          rows={title === "Message" ? 8 : 0}
          fullWidth
          multiline
          sx={{ margin: "0", width: "25em" }}
          name={name}
          id="input-with-sx"
          color="success"
        />
      </Grid>
    </StyledGrid>
  );
};
