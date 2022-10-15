import React, { FC } from "react";
import { social } from "../assets";
import { Links } from "./";
import wave from "../assets/svgs/wave.png";

const Footer: FC = () => {
  return (
    <footer
      className="flex flex-col items-center py-20"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-evenly">
        <Links href={social[0].link} name={social[0].alt} icon={""} />
        <Links href={social[1].link} name={social[1].alt} icon={""} />
        <Links link="/contact" name="Contact" icon={""} />
      </div>
      <div>
        <p>Made with 💛 by Cintia</p>
      </div>
    </footer>
  );
};

export default Footer;
