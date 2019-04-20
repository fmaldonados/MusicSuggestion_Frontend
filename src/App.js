import React, { Component } from 'react';
import {ReactComponent as Logo} from './img/svg/logo.svg';
import background from './img/background1.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light" style={{backgroundColor:'#0B0C10'}}>
          <a className="navbar-brand" style={{color:"#FFFFFF"}}>
          <Logo style={{fill:"#FFFFFF"}}></Logo>
          Navbar</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn my-2 my-sm-0" style={{backgroundColor:"#45a29e", color:"#FFFFFF"}} type="submit">Login</button>
          </form>
        </nav>
        <div className="landingBackground">
          <img src={background}></img>
        </div>
      </div>
    );
  }
}

export default App;
