import React, { Fragment } from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import LoginInRouters from "../../routers/LoginInRouters";
// import App from '../../App'
const Layout = ({ token, setToken }) => {
  console.log(token);
  return (
    <Fragment>
      <Header token={token} setToken={setToken} />
      {token && token["user"] ? (
        <div>
          <Routers token={token} setToken={setToken} />
        </div>
      ) : (
        <div>
          <LoginInRouters setToken={setToken} />
        </div>
      )}
    </Fragment>
  );
};

export default Layout;
