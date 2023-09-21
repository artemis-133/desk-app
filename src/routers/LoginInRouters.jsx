import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const LoginInRouters = (saveToken) => {
  return (
    <Routes>
      <Route
        exact
        path="/register"
        element={<Register setToken={saveToken} />}
      />
      <Route exact path="/login" element={<Login setToken={saveToken} />} />
      <Route exact path="/" element={<Navigate replace={true} to="/login" />} />
    </Routes>
  );
};

export default LoginInRouters;
