import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const LoginInRouters = ({ saveToken }) => {
  return (
    <Routes>
      <Route exact path="/signup" element={<Signup setToken={saveToken} />} />
      <Route exact path="/signin" element={<Signin setToken={saveToken} />} />
      <Route
        exact
        path="/*"
        element={<Navigate replace={true} to="/signin" />}
      />
    </Routes>
  );
};

export default LoginInRouters;
