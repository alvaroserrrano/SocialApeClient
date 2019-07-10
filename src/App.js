import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Reset from '@material-ui/core/CssBaseline';
//token
import jwtDecode from 'jwt-decode';
//import components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';
//import pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);
let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < new Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <Router>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={home} />
                <AuthRoute exact path='/login' component={login} />
                <AuthRoute exact path='/signup' component={signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
