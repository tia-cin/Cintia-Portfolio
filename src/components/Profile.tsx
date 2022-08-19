import React, { FC } from "react";
// MUI
import { Avatar, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
// svgs
import profile from "../assets/others/cintia-arce-profile.png";
import blob1 from "../assets/svgs/output-onlinepngtools (1).png";
import blob2 from "../assets/svgs/output-onlinepngtools (2).png";
import blob3 from "../assets/svgs/output-onlinepngtools (3).png";
import blob4 from "../assets/svgs/output-onlinepngtools (4).png";
import blob5 from "../assets/svgs/output-onlinepngtools (5).png";
import blob6 from "../assets/svgs/output-onlinepngtools (6).png";
import blob7 from "../assets/svgs/output-onlinepngtools (7).png";
import blob8 from "../assets/svgs/output-onlinepngtools (8).png";

export const StyledGrid = styled(Grid)`
  position: relative;
  width: 100%;
  height: 100vh;
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
  @media only screen and (max-width: 600px) {
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

export const Profile: FC = () => {
  const blobs = [blob1, blob2, blob3, blob4, blob5, blob6, blob7, blob8];

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
      <Grid className="svgs-continer">
        {blobs.map((b, i) => (
          <img
            alt="blob"
            src={b}
            key={i}
            width="100"
            height="100"
            className="animated"
            id={(Math.floor(Math.random() * 4) + 1).toString()}
          />
        ))}
      </Grid>
    </StyledGrid>
  );
};
