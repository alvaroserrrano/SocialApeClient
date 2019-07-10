import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Reset from '@material-ui/core/CssBaseline';
//import components
import Navbar from './components/Navbar';
//import pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff'
    },
    secondary: {
      light: '#b0ff57',
      main: '#76ff03',
      dark: '#32cb00',
      contrastText: '#000'
    },
    type: 'dark',
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: 'center'
    },
    image: {
      margin: '20px auto 20px'
    },
    pageTitle: {
      margin: '10px auto 10px'
    },
    textField: {
      margin: '10px auto 10px'
    },
    button: {
      marginTop: '20px',
      marginBottom: '20px',
      position: 'relative'
    },
    customError: {
      color: 'red',
      fontSize: '0.8 rem',
      marginTop: '10px'
    },
    smallText: {
      marginTop: '25px',
      color: '#fff'
    },
    progress: {
      position: 'absolute'
    }
  }
});

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
                <Route exact path='/login' component={login} />
                <Route exact path='/signup' component={signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
