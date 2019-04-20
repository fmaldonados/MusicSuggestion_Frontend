import React, { Component } from 'react';
import {ReactComponent as Logo} from './img/svg/logo.svg';
import { BrowserRouter, Route, Switch, withRouter, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//components
import Landing from './components/landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light" style={{backgroundColor:"#1F2833"}}>
        
          <a className="navbar-brand" style={{color:"#FFFFFF"}}>
          <Logo style={{fill:"#66F6F1", height:'50px', width: '50px'}}></Logo>
          MUSIC4YOU</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn my-2 my-sm-0" style={{backgroundColor:"#45a29e", color:"#FFFFFF"}}>Login</button>
          </form>
        </nav>

        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
