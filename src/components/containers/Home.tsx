import React, { FC } from "react";
import profile from "../../assets/others/cintia-arce-profile.png";
// MUI
import { Avatar, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
// svgs
import blob1 from "../../assets/svgs/output-onlinepngtools (1).png";
import blob2 from "../../assets/svgs/output-onlinepngtools (2).png";
import blob3 from "../../assets/svgs/output-onlinepngtools (3).png";
import blob4 from "../../assets/svgs/output-onlinepngtools (4).png";
import blob5 from "../../assets/svgs/output-onlinepngtools (5).png";
import blob6 from "../../assets/svgs/output-onlinepngtools (6).png";
import blob7 from "../../assets/svgs/output-onlinepngtools (7).png";
import blob8 from "../../assets/svgs/output-onlinepngtools (8).png";

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
        <Grid item>
          <Typography variant="h1" className="animated" id="8">
            Hi, I'm Cintia a
          </Typography>
          <Typography variant="h2" className="animated" id="6">
            Frontend Developer
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            src={profile}
            className="animated"
            id="-5"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <img
          src={blob1}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="45"
        />
        <img
          src={blob2}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-98"
        />
        <img
          src={blob3}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="47"
        />
        <img
          src={blob4}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-25"
        />
        <img
          src={blob5}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-79"
        />
        <img
          src={blob5}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="76"
        />
        <img
          src={blob6}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-48"
        />
        <img
          src={blob7}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="77"
        />
        <img
          src={blob8}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-71"
        />
      </StyledGrid>
    </main>
  );
};
