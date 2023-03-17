import React from "react";
import { Landing, Navbar, Section } from "./components";
import { colors, profile, blobs } from "./assets";

export const App: React.FC = () => {
  return (
    <div className="m-0 p-0 w-full h-screen">
      <Navbar />
      <Landing
        topText={profile.topText}
        middleText={profile.middleText}
        bottomText={profile.bottomText}
      />
    </div>
  );
};
