import React from 'react';
import Account from '../components/Account';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import WelcomeUser from '../components/WelcomeUser';

const Profil = () => {
    return (
        <div className="profil">
            <Navigation/>
            <main className="main bg-dark">
                <WelcomeUser/>
                <Account/>
            </main>
            <Footer/>
        </div>
    );
};

export default Profil;