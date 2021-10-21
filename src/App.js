import './App.css';
import NotFound from './pages/NotFound';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Profil from './pages/Profil';


function App() {
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
