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
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false);
  const [pageSelected, setPageSelected] = React.useState<string>("");

  const handlePage = (page: string): void => {
    setPageSelected(page);
  };

  const toggleMenu = (): void => {
    setActiveMenu(!activeMenu);
  };

  React.useEffect(() => {
    gsap.fromTo(
      "nav",
      { opacity: 0, y: -20, duration: 1 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);
  return (
    <nav
      className={`fixed flex justify-between top-0 w-full uppercase bg-main-bg z-10 ${
        activeMenu && "flex-col"
      }`}
    >
      <div className="p-5">
        <p className="text-xl font-semibold">Portfolio</p>
      </div>
      {activeMenu ? (
        <ul className="responsive fixed right-0 ml-5 p-5 flex flex-col gap-3 bg-gray-400 h-screen w-1/5 md:w-2/5">
          <li
            className="flex items-center font-bold cursor-pointer"
            onClick={toggleMenu}
          >
            <BsChevronLeft className="mr-2" /> Go Back
          </li>
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
      ) : (
        <div className="p-5 text-3xl cursor-pointer">
          <BsList onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
