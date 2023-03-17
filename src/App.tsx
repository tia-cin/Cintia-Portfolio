import React from "react";
import { Landing, Navbar, Section } from "./components";
import { colors, profile, blobs } from "./assets";

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
    </div>
  );
};
