import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

const HomePage = () => {
    return (
        <div className="homePage">
            <Navigation />
            <Hero />
        </div>
    );
};

export default HomePage ;