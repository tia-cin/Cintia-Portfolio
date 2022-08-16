import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { colors } from "./types";
// components
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Email } from "./components/Email";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App" style={{ overflowX: "hidden" }}>
        <Navbar />
        <div style={{ marginTop: "5em" }}>
          <Routes>
            <Route path="/" element={<Home colors={colors} />} />
            <Route path="/contact" element={<Email />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
