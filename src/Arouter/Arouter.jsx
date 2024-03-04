import React from 'react'
//libraries
import { Routes, Route } from "react-router-dom"
    
//components
import Home from "../pages/home/home";
import Cart from "../pages/cart/cart";
import Nopage from "../pages/Nopage/nopage";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Dashboard from "../pages/admin/dashborad/dashboard";
import Mens   from "../pages/mens/mens";
import Womens from "../pages/womens/womens";
import Mobile from "../pages/mobile covres/mobile";
import Login from"../components/login/login";
function Arouter() {
  return (
    <div>
                <Navbar />
                <Routes>
                    
                    <Route path="/" element={<Home/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Nopage />} />
                    <Route path="/navbar" element={<Navbar/>} />
                    <Route path="/mens" element={<Mens/>} />
                    <Route path="/womens" element={<Womens/>} />
                    <Route path="/mobile" element={<Mobile/>} />
                    <Route path="/login" element={<Login/>} />
                    
                </Routes>
                <Footer />
           
            </div>
        );
    };
    
    
  


export default Arouter