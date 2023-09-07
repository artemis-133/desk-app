import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/History';
import Bookdesk from '../pages/Bookdesk';
import About from '../pages/About';


const Routers = () => {
  return <Routes>
    <Route path = '/' element = {<Navigate to = '/Home'/>}/>
    <Route path = '/home' element = {<Home/>}/>
    <Route path = '/About' element = {<About/>}/>
    <Route path = '/Bookdesk' element = {<Bookdesk/>}/>
    <Route path = '/History' element = {<History/>}/>
  </Routes>
}

export default Routers