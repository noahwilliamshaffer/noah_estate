import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'; // Ensure PrivateRoute is correctly imported

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignIn />} />

                {/* Protect the Profile route */}
                <Route 
                    path="/profile" 
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } 
                />
            </Routes>
        </BrowserRouter>
    );
}
