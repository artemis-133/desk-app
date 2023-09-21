import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Bookdesk from "../pages/Bookdesk";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Bookdesk" element={<Bookdesk />} />
      <Route path="/History" element={<History />} />
      <Route path="/*" element={<Navigate to="/Home" replace={true} />} />
    </Routes>
  );
};

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/History';
import Bookdesk from '../pages/Bookdesk';
import About from '../pages/About';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';



const Routers = () => {
  return <Routes>
    <Route path = '/' element = {<Navigate to = '/Home'/>}/>
    <Route path = '/home' element = {<Home/>}/>
    <Route path = '/About' element = {<About/>}/>
    <Route path = '/Bookdesk' element = {<Bookdesk/>}/>
    <Route path = '/History' element = {<History/>}/>
    <Route path = '/Signin' element = {<Signin/>}/>
    <Route path = '/Signup' element = {<Signup/>}/>
  </Routes>
}

export default Routers;
