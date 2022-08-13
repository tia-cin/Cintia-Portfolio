import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Email } from "./components/Email";

export const App: FC = () => {
  const colors = ["#ffce6d", "#ED5B2D", "#F7B9A1", "#51ABB2"];
  return (
    <BrowserRouter>
      <div className="App">
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
