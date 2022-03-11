//Routing concepts

import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Routing/Login';
import  NavBar from './Routing/NavBar';
import SingUp from './Routing/SingUp';
import Home from './Routing/Home';
export const App = () => {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route  path="/login" element={<Login />}/>
   <Route  path="/signup" element={<SingUp/>}/>
   </Routes>
    </BrowserRouter>
    </div>
  );
};
export default App
