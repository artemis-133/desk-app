import React, { Fragment, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import LoginInRouters from "../../routers/LoginInRouters";
// import App from '../../App'
const Layout = ({ token, saveToken }) => {
  useEffect(() => {
    console.log(token);
  }, []);
  return (
    <Fragment>
      <Header token={token} />
      {token && token["cookie_id"] ? (
        <div>
          <Routers />
        </div>
      ) : (
        <div>
          <LoginInRouters saveToken={saveToken} />
        </div>
      )}
      <Footer />
    </Fragment>
  );
};
import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Routers from '../../routers/Routers'
import App from '../../App'
const Layout = () => {
  return <Fragment>
  <Header/>
  <div>
      <Routers/>
  </div>
  </Fragment>
}

export default Layout;
