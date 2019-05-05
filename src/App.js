import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/svg/logo.svg';
import { ReactComponent as SpotifyLogo } from './img/svg/spotify.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { parse } from 'query-string';
import { save, load } from 'react-cookies';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//components
import Landing from './components/landing'
import Home from './components/home'
import Oops404 from './components/Oops404'

class App extends Component {


  constructor() {
    super();
    this.state = {
      isAuth: false
    }
  }

  componentDidMount() {
    if (window.location.search) {
      let tok = parse(window.location.search);
      save('xD', tok.access_token);
      this.setState({ isAuth: true });
    } else {
      load('xD')? this.setState({ isAuth: true }):this.setState({ isAuth: false });
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light" style={{ backgroundColor: "#1F2833" }}>

          <a className="navbar-brand" style={{ color: "#FFFFFF" }}>
            <Logo style={{ fill: "#66F6F1", height: '50px', width: '50px' }}></Logo>
            MUSIC4YOU</a>

          <button className="btn my-2 my-sm-0" onClick={() => window.location = 'http://localhost:8080/api/login'} style={{ backgroundColor: "#1DB954", color: "#FFFFFF" }}><SpotifyLogo style={{ marginRight: '5px' }}></SpotifyLogo> LOGIN</button>
        </nav>

        <BrowserRouter>
          <Switch>
            <Route path="/" render={(props) => <Landing {...props} isAuth={this.state.isAuth} />} exact={true}></Route>
            <Route path="/Home" render={(props) => <Home {...props} isAuth={this.state.isAuth} />} ></Route>
            <Route path="*" component={Oops404}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
