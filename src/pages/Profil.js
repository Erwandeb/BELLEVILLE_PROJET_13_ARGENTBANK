import React, { useContext } from 'react';
import Account from '../components/Account';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import WelcomeUser from '../components/WelcomeUser';
import { UidContext } from '../components/AppContext';

const Profil = () => {
    const uid = useContext(UidContext);

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