import Layout from "./components/Layout/Layout";
import { useState } from "react";
// import "./App.css";

function App() {
  // const navigate = useNavigate();
  const secondsInDay = 86400;
  const secondsSinceLogin = function (date) {
    const loginDate = new Date(date);
    const current = new Date();
    const ans = Math.floor(Math.abs(current - loginDate) / 1000);
    if (isNaN(ans)) {
      return secondsInDay + 1;
    }
    return ans;
  };

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    if (userToken && secondsSinceLogin(userToken.login_date) > secondsInDay) {
      return null;
    }
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  return <Layout token={token} setToken={setToken} />;
}

export default App;
