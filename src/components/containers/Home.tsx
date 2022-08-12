import React, { FC } from "react";
import profile from "../../assets/others/cintia-arce-profile.png";
// MUI
import { Avatar, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
// svgs
import blob1 from "../../assets/svgs/output-onlinepngtools (9).png";
import blob2 from "../../assets/svgs/output-onlinepngtools (10).png";
import blob3 from "../../assets/svgs/output-onlinepngtools (11).png";
import blob4 from "../../assets/svgs/output-onlinepngtools (12).png";
import blob5 from "../../assets/svgs/output-onlinepngtools (13).png";
import blob6 from "../../assets/svgs/output-onlinepngtools (14).png";
import blob7 from "../../assets/svgs/output-onlinepngtools (15).png";
import blob8 from "../../assets/svgs/output-onlinepngtools (16).png";

const StyledGrid = styled(Grid)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: contain;
  }
`;

export const Home: FC = () => {
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
    <main style={{ height: "90vh" }}>
      <StyledGrid container justifyContent="center">
        <Grid item sx={{ margin: "2em" }}>
          <Typography variant="h1" className="animated" id="2">
            Hi, I'm Cintia a
          </Typography>
          <Typography variant="h2" className="animated" id="-3">
            Frontend Developer
          </Typography>
        </Grid>
        <Grid item sx={{ margin: "2em" }}>
          <Avatar
            src={profile}
            className="animated"
            id="-5"
            sx={{ width: 200, height: 200, backgroundColor: "#51ABB2" }}
          />
        </Grid>
        <img
          src={blob1}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="5"
        />
        <img
          src={blob2}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-5"
        />
        <img
          src={blob3}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="4"
        />
        <img
          src={blob4}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-2"
        />
        <img
          src={blob5}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-2"
        />
        <img
          src={blob6}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-2"
        />
        <img
          src={blob7}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="1"
        />
        <img
          src={blob8}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-1"
        />
      </StyledGrid>
    </main>
  );
};
