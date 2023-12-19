import React from "react";
import { Outlet } from "react-router-dom";
import './index.css';
import Navbar from '../Navbar';
import ScrollToHashElement from "../ScrollToHash/ScrollToHashElement";

export default function Layout () {
    
    return ( 
    <div>
                   

        <Navbar />
        <div>
        <ScrollToHashElement />
            <Outlet />
        
        </div>
    </div>
    );
    }

