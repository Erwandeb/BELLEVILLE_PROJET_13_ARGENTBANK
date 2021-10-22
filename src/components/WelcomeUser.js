import React from 'react';

const WelcomeUser = () => {
    return (
        <div className="welcome-user-display">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
        </div>
    );
};

export default WelcomeUser;