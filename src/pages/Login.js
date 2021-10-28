import React, {useEffect,useState} from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SignIncontent from '../components/SignIncontent';
import api from '../api';



const Login = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});
 
    useEffect(() => {

        // Mocking User Details
        function mockingApiUserProfile(){
            api.getUserProfile()
            .then(
                (user) => {
                setIsLoaded(true);
                setUser(user);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            .catch(err => console.log(err))
        }

        mockingApiUserProfile();
    },[])


    // Handle Error, loading or render home Page 
       if(error) {
        return <div className="info-error-page">Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="info-error-page">Chargement...</div>;
    } else {
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
};

export default Login;