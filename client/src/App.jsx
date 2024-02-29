import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Header from './components/Header';




export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/Profile" element = {<Profile/>} />
    <Route path="/SignUp" element = {<SignUp/>} />
    <Route path="/About" element = {<About/>} />
    <Route path="/SignIn" element = {<SignIn/>} />
   

  </Routes>
  
   </BrowserRouter>; 
}
