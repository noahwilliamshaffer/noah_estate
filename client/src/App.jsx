import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';


export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/Profile" element = {<Profile/>} />
    <Route path="/SignUp" element = {<SignUp/>} />
    

  </Routes>
  
   </BrowserRouter>; 
}