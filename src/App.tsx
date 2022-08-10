import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/App/Navbar";
import { Tech } from "./components/Tech-Stack/Tech";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Projects/Experience";
import { Skills } from "./components/Skills/Skills";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/projects" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
