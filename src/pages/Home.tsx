import React, { FC } from "react";
import { Landing, Footer, Section } from "../components";
import { profile, technologies, projects } from "../assets";

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
        bubble={technologies.development}
      />
      <Section
        title="Style and Design Tools"
        subtitle="Shape projects personalities into an good looking and user-friendly components"
        color={colors[2]}
        bubble={[technologies.style, technologies.design]}
        doble
      />
      <Section
        title="Here are some of my Projects"
        subtitle="Explore and view the code source"
        color={colors[3]}
        card={projects}
      />
      <Footer />
    </div>
  );
};

export default Home;
