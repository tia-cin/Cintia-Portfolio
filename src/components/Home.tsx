import React, { FC } from "react";
import { Experience } from "./Experience";
import { Profile } from "./Profile";
import { Tech } from "./Tech";
import { Skills } from "./Skills";
import { Footer } from "./Footer";
import { Introduction } from "./Introduction";

interface HomeProps {
  colors: Array<string>;
}

export const Home: FC<HomeProps> = ({ colors }) => {
  return (
    <div>
      <Profile />
      <Introduction />
      <Tech colors={colors} />
      <Skills colors={colors} />
      <Experience colors={colors} />
      <Footer />
    </div>
  );
};
