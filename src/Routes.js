import React from 'react';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import cookies from 'react-cookies';

const AuthRoutes=(props)=>{
  return cookies.load('logged')?<Route {...props} />:<Redirect to="/login" />
}


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <AuthRoutes path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
