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
  const colors = ["#ffce6d", "#ED5B2D", "#F7B9A1", "#51ABB2"];
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div style={{ marginTop: "5em" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech" element={<Tech colors={colors} />} />
            <Route path="/projects" element={<Experience colors={colors} />} />
            <Route path="/skills" element={<Skills colors={colors} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
