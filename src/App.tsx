import React from "react";
import {
  Footer,
  Landing,
  Navbar,
  Section,
  Email,
  Projects,
} from "./components";
import { colors, profile, technologies, projects } from "./assets";

export const App: React.FC = () => {
  return (
    <div className="m-0 p-0 w-full h-screen">
      <Navbar />
      <Landing
        id="home"
        topText={profile.topText}
        middleText={profile.middleText}
        bottomText={profile.bottomText}
      />
      <Section
        color={colors[2]}
        title={"About Me"}
        subtitle={profile.about}
        image={profile.photo}
        id="about"
      />
      <Section
        id="tech-stack"
        reverse
        title="Tech-Stack"
        subtitle={profile.techStack}
        color={colors[0]}
        bubble={technologies.development}
      />
      <Section
        id="design"
        title="Style and Design Tools"
        subtitle={profile.style}
        color={colors[3]}
        bubble={[technologies.style, technologies.design]}
        doble
      />
      <Landing
        middleText="Here are some of my projects"
        bottomText="Explore the source code"
        id="projects"
      />
      <Projects projects={projects} />
      <Email />
      <Footer />
    </div>
  );
};
