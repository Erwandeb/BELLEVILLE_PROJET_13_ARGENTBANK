import React from 'react';
import { Route , Redirect } from 'react-router-dom';
import Authentification from './Authentification';

export const ProtectedRoute = ({Component, ...rest}) =>{
    return( 
        <Route {...rest} 
        render={
            (props)=>{
                if(Authentification.isAuthentificated()){
                    return <Component {...props}/>
                }
               else{
                    return <Redirect to={
                        {
                            pathname:"./",
                            state:{
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        }/>
    )
}