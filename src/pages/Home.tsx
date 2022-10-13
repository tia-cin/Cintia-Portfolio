import React, { FC } from "react";
import { Landing, Footer, Section } from "../components";
import { profile, technologies, projects } from "../assets";
import { color } from "@mui/system";

const Home: FC<{
  colors: Array<string>;
}> = ({ colors }) => {
  return (
    <div>
      <Landing />
      <Section
        color={colors[Math.floor(Math.random() * 4)]}
        title={"About Me"}
        subtitle={profile.introduction}
        image={profile.photo}
      />
      <Section
        reverse
        title="Tech-Stack"
        subtitle="Frontend (client-side) and Backend (server-side). Both work together to create a working tech stack. This is also referred to as an application stack."
        color={colors[Math.floor(Math.random() * 4)]}
        bubble={technologies.development}
      />
      <Section
        title="Style and Design Tools"
        subtitle="Shape projects personalities into an good looking and user-friendly components"
        color={colors[Math.floor(Math.random() * 4)]}
        bubble={[technologies.style, technologies.design]}
        doble
      />
      <Section
        reverse
        title="Here are some of my Projects"
        subtitle="Explore and view the code source"
        color={colors[Math.floor(Math.random() * 4)]}
        card={projects}
      />
      <Footer />
    </div>
  );
};

export default Home;
