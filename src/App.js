import React, { Component } from 'react';
import {ReactComponent as Logo} from './img/svg/logo.svg';
import {ReactComponent as SpotifyLogo} from './img/svg/spotify.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//components
import Landing from './components/landing'
import Oops404 from './components/Oops404'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light" style={{backgroundColor:"#1F2833"}}>
        
          <a className="navbar-brand" style={{color:"#FFFFFF"}}>
          <Logo style={{fill:"#66F6F1", height:'50px', width: '50px'}}></Logo>
          MUSIC4YOU</a>
          <form className="form-inline">
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> */}
            <button className="btn my-2 my-sm-0" style={{backgroundColor:"#1DB954", color:"#FFFFFF"}}><SpotifyLogo style={{marginRight:'5px'}}></SpotifyLogo> LOGIN</button>
          </form>
        </nav>

        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} exact={true}></Route>
            <Route path="*" component={Oops404}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
