import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Social } from "./components/Social";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Tech } from "./components/Tech";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/projects" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Social />
      </div>
    </BrowserRouter>
  );
};
