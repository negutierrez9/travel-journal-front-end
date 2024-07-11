import React from 'react';
import './Nav.css';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
import { Link } from "react-router-dom";
import { removeJwt } from '../api_services/JwtServices';

export default function Nav() {
    const logout = () => {
        removeJwt(); 
    }

    return (
        <div className="navbar"> 
            <Link to="/home" className="navbar--home">
                <ion-icon name="home"></ion-icon>
            </Link>
            <div className="navbar--title">
                <ion-icon name="earth"></ion-icon>
                <h1 id="title">my travel journal!</h1>
            </div> 
            <Link to='/' className="navbar--login" onClick={logout}>sign out</Link>
        </div>
    )
}