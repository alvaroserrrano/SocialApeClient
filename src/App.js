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
//import AuthRoute from './util/AuthRoute';
//import pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
//theme
import themeFile from './util/theme';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';
const theme = createMuiTheme(themeFile);
// let authenticated;
// const token = localStorage.FBIdToken;
// if (token) {
//   console.log(decodedToken);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     window.location.href = '/login';
//     authenticated = false;
//   } else {
//   const decodedToken = jwtDecode(token);
//     authenticated = true;
//   }
// }

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <div className='App'>
            <Router>
              <Navbar />
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={home} />
                  <Route exact path='/login' component={login} />
                  <Route exact path='/signup' component={signup} />
                </Switch>
              </div>
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
