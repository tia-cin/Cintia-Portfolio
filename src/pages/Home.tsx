import React, { FC } from "react";
// components
import { Profile } from "../components/Profile";
import { Footer } from "../components/Footer";

interface HomeProps {
  colors: Array<string>;
}

export const Home: FC<HomeProps> = ({ colors }) => {
  return (
    <div>
      <Profile />
      <Footer />
    </div>
  );
};
