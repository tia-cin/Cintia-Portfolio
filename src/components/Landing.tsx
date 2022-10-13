import React, { FC } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { profile, blobs } from "../assets";
import { Link } from "react-router-dom";

export const StyledGrid = styled(Grid)`
  img @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    h1 {
      font-size: 3em;
    }
    h2 {
      font-size: 1.75em;
    }
    img {
      width: 100;
      height: 100;
    }
    .svgs-continer {
      opacity: 0;
    }
  }
`;

const Landing: FC = () => {
  const animation = (e: any) => {
    document.querySelectorAll(".animated").forEach((move: any) => {
      let value = move.getAttribute("id");
      let x = (e.clientX * value) / 250;
      let y = (e.clientY * value) / 250;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  document.addEventListener("mousemove", animation);

  return (
    <StyledGrid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="w-50">
        <p className="text-center fs-4 fw-bold">{profile.greeting}👋</p>
        <h1 className="text-center fs-1 fw-bolder text-capitalize display-1">
          {profile.title}
        </h1>
        <p className="text-center fs-5 text-muted">{profile.subtitle}</p>
      </div>
      <div className=":md-d-none">
        {blobs.map((b, i) => (
          <img
            alt="blob"
            src={b}
            key={i}
            width="100"
            height="100"
            style={{
              top: 0,
              left: 0,
              objectFit: "contain",
            }}
            className="animated position-absolute w-100 h-100"
            id={(Math.floor(Math.random() * 4) + 1).toString()}
          />
        ))}
      </div>
    </StyledGrid>
  );
};

export default Landing;
