import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Bookdesk from "../pages/Bookdesk";
import About from "../pages/About";

const Routers = ({ token, setToken }) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bookdesk" element={<Bookdesk token={token} />} />
      <Route
        path="/history"
        element={<History token={token} setToken={setToken} />}
      />
      <Route path="/*" element={<Navigate to="/home" replace={true} />} />
    </Routes>
  );
};

export default Routers;
