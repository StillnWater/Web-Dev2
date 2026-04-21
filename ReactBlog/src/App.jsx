import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Bollywood from "./Components/Bollywood";
import Food from "./Components/Food";
import Fitness from "./Components/Fitness";
import Technology from "./Components/Technology";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/food" element={<Food />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
