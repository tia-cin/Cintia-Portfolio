import React from "react";
import { gsap } from "gsap";
import { BsList, BsChevronLeft } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [screenSize, setScreenSize] = React.useState<number>(0);
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false);
  const [wrap, setWrap] = React.useState<boolean>(false);

  React.useEffect(() => {
    gsap.fromTo(
      "nav",
      { opacity: 0, y: -20, duration: 1 },
      { opacity: 1, y: 0, duration: 1 }
    );

    const handleScreenSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenSize);
    handleScreenSize();
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  React.useEffect(() => {
    if (screenSize <= 900) {
      setWrap(false);
    } else {
      setWrap(true);
    }
  }, [screenSize]);
  return (
    <nav
      className="fixed flex justify-between w-full top-0 uppercase bg-main-bg"
      style={{ zIndex: 1 }}
    >
      <div className="p-5">
        <p className="text-xl font-semibold">Portfolio</p>
      </div>
      {wrap ? (
        <ul className="p-5 flex justify-around w-1/2">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about me</a>
          </li>
          <li>
            <a href="#tech">tech-stack</a>
          </li>
          <li>
            <a href="#certifications">certifications</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      ) : activeMenu ? (
        <ul className="fixed right-0 ml-5 p-5 flex flex-col bg-gray-400 w-2/5 h-screen">
          <li
            className="flex items-center font-bold"
            onClick={() => setActiveMenu(false)}
          >
            <BsChevronLeft className="mr-2" /> Go Back
          </li>
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
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      ) : (
        <div className=" p-5 text-xl">
          <BsList onClick={() => setActiveMenu(true)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
