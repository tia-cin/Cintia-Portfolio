import React from "react";
import { gsap } from "gsap";
import { BsList, BsChevronLeft } from "react-icons/bs";

const items: { [key: string]: string } = {
  "#home": "home",
  "#about": "about me",
  "#tech": "tech-stack",
  "#certifications": "certifications",
  "#projects": "projects",
  "#contact": "contact",
};

const Navbar: React.FC = () => {
  const [screenSize, setScreenSize] = React.useState<number>(0);
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false);
  const [wrap, setWrap] = React.useState<boolean>(false);
  const [pageSelected, setPageSelected] = React.useState<string>("");

  const handlePage = (page: string): void => {
    setPageSelected(page);
  };

  const toggleMenu = (): void => {
    setActiveMenu(!activeMenu);
  };

  const NavItems: React.FC<{
    classes: string;
    items: { [key: string]: string };
    child?: React.ReactNode;
    handlePage: (page: string) => void;
    pageSelected: string;
  }> = ({ classes, child, handlePage, pageSelected, items }) => {
    return (
      <ul className={classes}>
        {child}
        {items &&
          Object.entries(items).map(([key, value]) => (
            <li
              key={key}
              className={`${pageSelected === key && "text-slate-300"}`}
              onClick={() => handlePage(key)}
            >
              <a href={key}>{value}</a>
            </li>
          ))}
      </ul>
    );
  };

  React.useEffect(() => {
    gsap.fromTo(
      "nav",
      { opacity: 0, y: -20, duration: 1 },
      { opacity: 1, y: 0, duration: 1 }
    );

    const handleScreenSize = () => setScreenSize(window.innerHeight);

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
      className={`fixed flex justify-between top-0 w-full uppercase bg-main-bg z-10 ${
        activeMenu ? "flex-col" : ""
      }`}
    >
      <div className="p-5">
        <p className="text-xl font-semibold">Portfolio</p>
      </div>
      {wrap ? (
        <NavItems
          pageSelected={pageSelected}
          handlePage={handlePage}
          items={items}
          classes={`p-5 flex justify-around w-1/2 ${
            activeMenu ? "hidden" : ""
          }`}
        />
      ) : activeMenu ? (
        <NavItems
          classes="fixed right-0 ml-5 p-5 flex flex-col gap-3 bg-gray-400 w-[220px] h-screen"
          child={
            <li className="flex items-center font-bold" onClick={toggleMenu}>
              <BsChevronLeft className="mr-2" /> Go Back
            </li>
          }
          handlePage={handlePage}
          pageSelected={pageSelected}
          items={items}
        />
      ) : (
        <div className=" p-5 text-xl">
          <BsList onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
