import React, { FC } from "react";
import { Profile, Footer, Section } from "../components";

interface HomeProps {
  colors: Array<string>;
}

const Home: FC<HomeProps> = ({ colors }) => {
  return (
    <div>
      <Section />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
