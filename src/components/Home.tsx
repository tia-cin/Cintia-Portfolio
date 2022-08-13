import React, { FC } from "react";
import { Experience } from "./Experience";
import { Profile } from "./Profile";
import { Tech } from "./Tech";
import { Skills } from "./Skills";
import { Footer } from "./Footer";

interface HomeProps {
  colors: Array<string>;
}

export const Home: FC<HomeProps> = ({ colors }) => {
  return (
    <div>
      <Profile />
      <Tech colors={colors} />
      <Experience colors={colors} />
      <Skills colors={colors} />
      <Footer/>
    </div>
  );
};
