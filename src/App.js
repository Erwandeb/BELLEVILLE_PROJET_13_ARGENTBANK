import './App.css';
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Profil from './pages/Profil';
import { useEffect, useState } from 'react';
import { UidContext } from './components/AppContext';
import axios from 'axios';


function App() {

  /*
  const [uid, setUid] = useState(null);

  useEffect(()=>{
    const fetchToken = async () => {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`
      })
      .then((res)=> setUid(res.data))
      .catch((res)=>console.log('no token'+ res))
    }
    fetchToken();
  })
  */

/*
let bearer = 'Bearer ' + JSON.parse(localStorage.getItem('token'));
axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}api/v1/user/profile`,
    headers: {
      Authorization: bearer
    },
    data: payload
  })
    .then(response => response.json())
    .then(json => json)
    .catch(error => {
      throw error;
    });
*/

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/profil" exact component={Profil}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
