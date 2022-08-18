import React, { FC } from "react";
// components
import { Experience } from "./Experience";
import { Profile } from "./Profile";
import { Tech } from "./Tech";
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
      <Experience colors={colors} />
      <Footer />
    </div>
  );
};
