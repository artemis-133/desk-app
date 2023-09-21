import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Bookdesk from "../pages/Bookdesk";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bookdesk" element={<Bookdesk />} />
      <Route path="/history" element={<History />} />
      <Route path="/*" element={<Navigate to="/home" replace={true} />} />
    </Routes>
  );
};

export default Routers;
