import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Email } from "./pages";
import { Navbar } from "./components";
import { colors } from "./assets";

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
