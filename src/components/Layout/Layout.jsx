import React, { Fragment, useEffect } from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import LoginInRouters from "../../routers/LoginInRouters";
// import App from '../../App'
const Layout = ({ token, saveToken }) => {
  useEffect(() => {
    console.log(token);
  }, []);
  return (
    <Fragment>
      <Header token={token} setToken={saveToken} />
      {token && token["cookie_id"] ? (
        <div>
          <Routers />
        </div>
      ) : (
        <div>
          <LoginInRouters saveToken={saveToken} />
        </div>
      )}
    </Fragment>
  );
};

export default Layout;
