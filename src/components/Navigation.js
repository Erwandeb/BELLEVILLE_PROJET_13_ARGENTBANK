import React from 'react';
import logo from '../public/medias/argentBankLogo.png'

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
                    <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;