import React, {useEffect,useState} from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SignIncontent from '../components/SignIncontent';



const Login = () => {

   
    // Handle Error, loading or render home Page 
  
        return (
            <div className="login">
                <Navigation/>
                <main className="main bg-dark-login">
                    <SignIncontent />
                </main>
                <Footer/>
            </div>
        );
};

export default Login;