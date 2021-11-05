import React from 'react';
import { useSelector } from 'react-redux';

const WelcomeUser = () => {
    
    const userData = useSelector((state) => state.userReducer);

      // handle "undefined" error
      if(!userData.body) {
        return null
        }

    const userModifyProfil= ()=>{
        <p>hello</p>
    }

    return (
        <div className="welcome-user-display">
            <div className="header">
                <h1>Welcome back <br/> {userData.body.firstName} {userData.body.lastName} !</h1>
                <button className="edit-button" onClick={userModifyProfil}>Edit Name</button>
            </div>
        </div>
    );
};

export default WelcomeUser;