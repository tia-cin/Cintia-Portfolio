import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Home } from "./components/containers/Home";
import { Navbar } from "./components/containers/Navbar";
import { Tech } from "./components/containers/Tech";
import { Contact } from "./components/containers/Contact";
import { Experience } from "./components/containers/Experience";
import { Skills } from "./components/containers/Skills";

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
