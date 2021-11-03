import React, {useState} from 'react';
import axios from 'axios';


const SignIncontent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    //Username is email of user !
 
        const handleLogin = (e) => {
            e.preventDefault();
            const usernameError = document.querySelector('.userName-error');
            const passwordError = document.querySelector('.password-error');
            
            axios({
                method: "post",
                url:`${process.env.REACT_APP_API_URL}api/v1/user/login`,
                data: {
                    email:username,
                    password:password,
                },
            })
            // Rendre dynamique ce composant avec retour message du backend
            .then((res)=>{
                console.log(res);
                if(res.data.errors){
                    usernameError.innerHTML= <p>Identidiant incorrect</p>
                    passwordError.innerHTML= <p>Mdp incorrect</p>
                } else{
                    window.location='/profil';
                    console.log(res);
                }
            });
            /*
            .catch((err) => {
                console.log(err)
            })
            */
        };
                

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form action="" onSubmit={handleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                    />
                    <div className="userName-error"></div>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label >
                        <input 
                            type="password" 
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                    <div className="password-error"></div>
                </div>
                <div className="input-remember">
                    <input 
                        type="checkbox" 
                        id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign in</button>
            </form>
        </section>
    );
};

export default SignIncontent;