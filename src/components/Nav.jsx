import React from 'react';
import './Nav.css';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
import { useNavigate, Link } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    return (
        <div className="navbar"> 
            <button className="navbar--home">
                <ion-icon name="home"></ion-icon>
            </button>
            <div className="navbar--title">
                <ion-icon name="earth"></ion-icon>
                <h1 id="title">my travel journal!</h1>
            </div> 
            <Link to='/login' className="navbar--login">sign out</Link>
        </div>
    )
}