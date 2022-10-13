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
  Avatar,
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
    <section
      style={{ backgroundColor: color }}
      className="rounded p-2 d-flex justify-content-between align-items-center"
    >
      <div className="mx-2">
        <img
          src={logo}
          alt={alt}
          style={{ objectFit: "cover", width: "4em", height: "4em" }}
        />
      </div>
      <div className="w-75">
        <p className="fs-4 fw-bold m-0">{title}</p>
        <p>{description}</p>
        <button
          className="btn w-100"
          style={{ backgroundColor: "#f9f9f9" }}
          onClick={() => window.open(link, "_blank")}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export const Bubble: FC<{
  link: string;
  logo: string;
  alt: string;
  color: string;
}> = ({ link, logo, alt, color }) => {
  return (
    <div className="m-2 g-col-2">
      <a href={link} style={{ textDecoration: "none" }}>
        <div
          style={{ backgroundColor: color }}
          className="circle animated d-flex flex-column justify-content-center align-items-center"
          id={(Math.random() * 5 + 2).toString()}
        >
          <Avatar
            src={logo}
            alt={alt}
            sx={{
              width: "5em",
              height: "5em",
              objectFit: "contain",
              p: "1em",
              backgroundColor: "#f9f9f9",
            }}
          />
        </div>
      </a>
    </div>
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

export const Inputs: FC<{
  title: string;
  name: string;
}> = ({ title, name }) => {
  return (
    <TextField
      rows={title === "Message" ? 8 : 0}
      fullWidth
      multiline
      label={title}
      sx={{ width: "25em", my: "1em" }}
      name={name}
      id="input-with-sx"
      color="success"
    />
  );
};
