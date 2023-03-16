import React from 'react';
import First from './first'
import Home from './home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './component/Profile';

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<First />} />
      
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
