import React from 'react';
import First from './first'
import Home from './home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './component/Profile';
import AlumniHome from './Alumni/AlumniHome';
import Login from './Auth/login';
import Signup from './Auth/signup';

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<First />} />
      
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/Admin' element={<AlumniHome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login/signup' element={<Signup/>}/>
      <Route path='/AlumniHome' element={<AlumniHome/>}/>

      
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
