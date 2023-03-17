import React from "react";
import { gsap } from "gsap";

const Navbar: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      "nav",
      { opacity: 0, y: -20, duration: 1 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);
  return (
    <nav
      className="fixed flex justify-between w-full h-80 top-0 uppercase"
      style={{ zIndex: 1 }}
    >
      <div className="m-5 ">
        <p className="text-xl font-semibold">Portfolio</p>
      </div>
      <ul className="m-5 flex justify-around w-1/3">
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about me</a>
        </li>
        <li>
          <a href="#tech-stack">technologies</a>
        </li>
        <li>
          <a href="#design">design</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
