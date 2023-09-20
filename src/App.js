import Layout from "./components/Layout/Layout";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";

function App() {
  // const navigate = useNavigate();

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  return <Layout token={token} saveToken={setToken} />;
}

export default App;
