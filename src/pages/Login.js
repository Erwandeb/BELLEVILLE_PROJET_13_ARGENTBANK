import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SignIncontent from '../components/SignIncontent';

const Login = () => {
    return (
        <div className="login">
            <Navigation/>
            <main className="main bg-dark">
                <SignIncontent />
            </main>
            <Footer/>
        </div>
    );
};

export default Login;