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
