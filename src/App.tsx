import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Social } from "./components/Social";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Social />
      </div>
    </BrowserRouter>
  );
};
