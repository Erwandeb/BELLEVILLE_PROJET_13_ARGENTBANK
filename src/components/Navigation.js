import React from 'react';
import logo from '../public/medias/argentBankLogo.png'
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="nav-cointainer">
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div> 
                <i className="fa fa-user-circle"></i>
                    <NavLink className="main-nav-item" exact to ="/login" activeClassName ="nav-active">
                    Sign In
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;