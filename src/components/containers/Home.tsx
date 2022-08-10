import React, { FC } from "react";
import profile from "../../assets/others/cintia-arce-profile.png";
// MUI
import { Avatar } from "@mui/material";

export const Home: FC = () => {
  return (
    <main>
      <div>
        <h1>
          Hi, I'm Cintia a <span>Frontend</span>
          <span> Developer</span>
        </h1>
        <Avatar src={profile} />
      </div>
    </main>
  );
};
