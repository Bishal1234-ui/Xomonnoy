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
import Compose from './Apages/compose';
import NoticeWrite from './Apages/noticeWrite';
import Jobnotification from './Apages/jobnotification';
import RmMemories from './Alumni/rmMemories';
import Writerm from './Alumni/writerm';


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
      <Route path='/compose' element={<Compose/>}/>
      <Route path='/notice' element={<NoticeWrite/>}/>
      <Route path='/jobnotification' element={<Jobnotification/>}/>
      <Route path='/rmMemories' element={<RmMemories/>}/>
      <Route path='/writerm' element={<Writerm/>}/>


      


      
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
