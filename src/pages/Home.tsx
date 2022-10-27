import React, { FC } from "react";
import { Landing, Footer, Section } from "../components";
import { profile, technologies, projects, blobs } from "../assets";

const Home: FC<{
  colors: Array<string>;
}> = ({ colors }) => {
  return (
    <div>
      <Landing
        smallText={`${profile.greeting} 👋`}
        bigText={profile.title}
        mediumText={profile.subtitle}
        data={blobs}
      />
      <Section
        color={colors[2]}
        title={"About Me"}
        subtitle={profile.introduction}
        image={profile.photo}
      />
      <Section
        reverse
        title="Tech-Stack"
        subtitle="Frontend (client-side) and Backend (server-side). Both work together to create a working tech stack. This is also referred to as an application stack."
        color={colors[0]}
        bubble={technologies.development}
      />
      <Section
        title="Style and Design Tools"
        subtitle="Shape projects personalities into an good looking and user-friendly components"
        color={colors[3]}
        bubble={[technologies.style, technologies.design]}
        doble
      />
      <Landing
        bigText="Here are some of my projects"
        mediumText="Explore the source code"
        data={projects}
      />
      <Footer />
    </div>
  );
};

export default Home;
