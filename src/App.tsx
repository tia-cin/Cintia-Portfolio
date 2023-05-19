import React from "react";
import {
  Footer,
  Landing,
  Navbar,
  Section,
  Email,
  Projects,
  Grid,
  Profile,
} from "./components";
import {
  colors,
  profile,
  technologies,
  projects,
  certifications,
} from "./assets";
import lozad from "lozad";

export const App: React.FC = () => {
  React.useEffect(() => {
    const observer = lozad(".gs_reveal");
    observer.observe();
    return () => observer.observer.disconnect();
  }, []);
  return (
    <div className="m-0 p-0 w-full h-screen sm:w-screen">
      <Navbar />
      <Landing
        id="home"
        topText={profile.topText}
        middleText={profile.middleText}
        bottomText={profile.bottomText}
      />
      <Profile photo={profile.photo} introduction={profile.about} />
      <Section
        id="tech-stack"
        reverse
        title="Tech-Stack"
        subtitle={profile.techStack}
        color={colors[0]}
        bubble={technologies.main}
      />
      <Section
        id=""
        title="Tools"
        subtitle={profile.tools}
        color={colors[1]}
        bubble={technologies.tools}
      />
      <Section
        id=""
        reverse
        title="Style"
        subtitle={profile.techStack}
        color={colors[2]}
        bubble={technologies.style}
      />
      <Section
        id=""
        title="Design Tools"
        subtitle={profile.style}
        color={colors[3]}
        bubble={technologies.design}
      />
      <Landing
        id="certifications"
        middleText="Professional Journey"
        topText="Discover My"
      />
      <Grid items={certifications} />
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
