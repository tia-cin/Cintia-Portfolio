import React, { FC } from "react";
import { Landing, Footer, Section } from "../components";
import { profile, technologies } from "../assets";

const Home: FC<{
  colors: Array<string>;
}> = ({ colors }) => {
  return (
    <div>
      <Landing />
      <Section
        color={colors[0]}
        title={"About Me"}
        subtitle={profile.introduction}
        image={profile.photo}
      />
      <Section
        reverse
        title="Tech-Stack"
        subtitle="Frontend (client-side) and Backend (server-side). Both work together to create a working tech stack. This is also referred to as an application stack."
        color={colors[1]}
        data={technologies.development}
      />
      <Footer />
    </div>
  );
};

export default Home;
