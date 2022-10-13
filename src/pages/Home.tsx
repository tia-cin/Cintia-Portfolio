import React, { FC } from "react";
import { Landing, Footer, Section } from "../components";

interface HomeProps {
  colors: Array<string>;
}

const Home: FC<HomeProps> = ({ colors }) => {
  return (
    <div>
      <Landing />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
