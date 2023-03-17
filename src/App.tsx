import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Email } from "./pages";
import { Navbar } from "./components";
import { colors } from "./assets";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div
        className="flex flex-col w-full items-center pt-40 justify-center"
        style={{ overflowX: "hidden" }}
      >
        {/* <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home colors={colors} />} />
            <Route path="/contact" element={<Email />} />
          </Routes>
        </div> */}
        <h1 className="text-5xl font-semibold text-center">
          Web Under Construction
        </h1>
        <p className="text-xl text-center m-20">
          I'm currently working hard to improve and enhance your browsing
          experience. Please bear with me while I work on making the website
          even better. Thank you for your patience!
        </p>
        <footer>
          <p className="text-lg m-10">
            While you wait, you may be interest in these
          </p>
          <ul className="flex justify-around">
            <li className="flex items-center">
              <BsLinkedin />
              <a
                className="ml-2 uppercase"
                href="https://www.linkedin.com/in/cintia-arce-profile"
              >
                linkedin
              </a>
            </li>
            <li className="flex items-center">
              <BsGithub />
              <a className="ml-2 uppercase" href="https://github.com/tia-cin">
                github
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  );
};
