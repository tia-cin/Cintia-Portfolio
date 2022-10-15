import React, { FC } from "react";
import { Links } from "./";

const Navbar: FC = () => {
  return (
    <nav
      className="flex justify-between items-center fixed"
      style={{ zIndex: 1 }}
    >
      <Links link="/" name="Home" icon={""} />
      <Links link="/contact" name="Contact" icon={""} />
    </nav>
  );
};

export default Navbar;
