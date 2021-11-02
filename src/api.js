/**
* This component make data from API or ApiMock
* Switch monitor is on the .ENV file
* 
* @author Erwan
* @version 1.1
*/


/**
* 
* This class is API Mock for developping app
*
* @param id This represent the id of user
* @return data from API, in JSON format. Otherwise, it throw error
*
*/

const apiMockRunning = true;

class ApiMock{

    // Un nouvel utilisateur créer son profil
    getUserSignUp(){
        console.log('renvoie class APIMOCK')
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                firstName: 'Mike',
                lastName: 'Tyson',
                email: 'hello@mike-tyson.com',
                password: 'password222'
            })
            else{
                reject('api mock is not running')
            }
        })
    }

    // Un utilisateur se connecte 
    getUserLogin(){
        console.log('renvoie class APIMOCK')
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                firstName: 'Mike',
                lastName: 'Tyson',
                email: 'hello@mike-tyson.com',
                password: 'password222'
            })
            else{
                reject('api mock is not running')
            }
        })
    }

    // Un utilisateur récupère son profil, et son token pour utiliser l'application
    getUserProfile(){
        console.log('renvoie class APIMOCK')
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                firstName: 'Mike',
                lastName: 'Tyson',
                email: 'hello@mike-tyson.com',
                password: 'password222'
            })
            else{
                reject('api mock is not running')
            }
        })
    }


    // Un utilisateur récupère son profil, et modifie ses données
    changeUserProfile(){
        console.log('renvoie class APIMOCK')
        return new Promise((resolve, reject) => {
            if(apiMockRunning) resolve({
                firstName: 'Mike',
                lastName: 'Tyson',
                email: 'hello@mike-tyson.com',
                password: 'password222'
            })
            else{
                reject('api mock is not running')
            }
        })
    }
}


/**
* 
* Class API is used to connect this app to the backend. 
*
* @return data from API, in JSON format. Otherwise, it throw error 
*
*/

class Api {

    // Un nouvel utilisateur créer son profil
    getUserSignUp(){
        console.log('renvoie class API')
        return fetch(process.env.REACT_APP_API_URL + '/api/v1/user/signup').then((res) => res.json())
        .then((res)=>res.data)
        
    }

    // Un utilisateur se connecte
    getUserLogin(){
        console.log('renvoie class API')
        return fetch(process.env.REACT_APP_API_URL + '/api/v1/user/login').then((res) => res.json())
        .then((res)=>res.data)
        
    } 
    
    // Un utilisateur récupère son profil, et son token pour utiliser l'application
    getUserProfile(){
        console.log('renvoie class API')
        return fetch(process.env.REACT_APP_API_URL + '/api/v1/user/profile').then((res) => res.json())
        .then((res)=>res.data)
        
    }

    // Un utilisateur récupère son profil, et modifie ses données
    changeUserProfile(){
        console.log('renvoie class API')
        return fetch(process.env.REACT_APP_API_URL + '/api/v1/user/profile').then((res) => res.json())
        .then((res)=>res.data)
        
    }


}


/**
* 
* Used to switch from reel API to Mocked API
* We modifiying .env file for switching
*
* @return data from API, in JSON format.
*
*/

let api = new Api();
if(process.env.REACT_APP_API === 'mock'){
    api = new ApiMock();
    console.log('renvoie class APIMOCK')
}


export default api;