import React, { FC } from "react";
import { Links } from "./";
import { AiFillHome } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Navbar: FC = () => {
  return (
    <nav
      className="flex justify-between items-center fixed"
      style={{ zIndex: 1 }}
    >
      <Links
        link="/"
        name="Home"
        icon={<AiFillHome style={{ fontSize: "2em" }} />}
      />
      <Links
        link="/contact"
        name="Contact"
        icon={<MdMail style={{ fontSize: "2em" }} />}
      />
    </nav>
  );
};

export default Navbar;
