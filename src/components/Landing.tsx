import React, { FC } from "react";
import { profile, blobs } from "../assets";

const Landing: FC = () => {
  const animation = (e: any) => {
    document.querySelectorAll(".animated").forEach((move: any) => {
      let value = move.getAttribute("id");
      let x = (e.clientX * value) / 250;
      let y = (e.clientY * value) / 250;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  document.addEventListener("mousemove", animation);

  return (
    <div className="flex justify-center items-center relative w-full h-screen overflow-hidden">
      <div className="flex flex-col w-1/2 " style={{ zIndex: 1 }}>
        <p className="text-center font-semibold text-xl">
          {profile.greeting}👋
        </p>
        <h1 className="text-center text-7xl font-bold">{profile.title}</h1>
        <p className="text-center mt-5 text-lg">{profile.subtitle}</p>
      </div>
      <div className="z-0">
        {blobs.map((b, i) => (
          <img
            alt="blob"
            src={b}
            key={i}
            style={{
              top: 0,
              left: 0,
              objectFit: "contain",
              zIndex: 0,
            }}
            className="animated absolute w-full h-full"
            id={(Math.floor(Math.random() * 4) + 1).toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
