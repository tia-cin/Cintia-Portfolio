import React, { FC } from "react";
import profile from "../../assets/others/cintia-arce-profile.png";
// MUI
import { Avatar, Grid, Typography } from "@mui/material";
// svgs
import blob1 from "../../assets/svgs/blob (1).svg";
import blob2 from "../../assets/svgs/blob (2).svg";
import blob3 from "../../assets/svgs/blob (3).svg";
import blob4 from "../../assets/svgs/blob (4).svg";
import blob5 from "../../assets/svgs/blob (5).svg";
import blob6 from "../../assets/svgs/blob (6).svg";
import blob7 from "../../assets/svgs/blob (7).svg";
import blob8 from "../../assets/svgs/blob (8).svg";

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
    <main>
      <Grid container justifyContent="center">
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
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
        <img
          src={blob1}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-5"
        />
        <img
          src={blob2}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-8"
        />
        <img
          src={blob3}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="7"
        />
        <img
          src={blob4}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="5"
        />
        <img
          src={blob5}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-9"
        />
        <img
          src={blob5}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="6"
        />
        <img
          src={blob6}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-8"
        />
        <img
          src={blob7}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="7"
        />
        <img
          src={blob8}
          alt="svg"
          width="100"
          height="100"
          className="animated"
          id="-11"
        />
      </Grid>
    </main>
  );
};
