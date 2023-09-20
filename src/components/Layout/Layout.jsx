import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
// import App from '../../App'
const Layout = ({ token, saveToken }) => {
  return (
    <Fragment>
      <Header token={token} />
      {token["emp_id"] ? (
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

export default Layout;
