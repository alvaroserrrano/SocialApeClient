import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom/';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
//MaterialUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MyButton from '../util/MyButton';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Notifications from '@material-ui/icons/Notifications';

export class Navbar extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar position='static'>
        <Toolbar className='nav-container'>
          {authenticated ? (
            <Fragment>
              <MyButton tip='Post a scream!'>
                <AddIcon color='secondary' />
              </MyButton>
              <Link to='/home'>
                <MyButton tip='Home'>
                  <HomeIcon color='secondary' />
                </MyButton>
              </Link>
              <MyButton tip='Notificatons'>
                <Notifications color='secondary' />
              </MyButton>
            </Fragment>
          ) : (
            <Fragment>
              <Button color='inherit' component={Link} to='login'>
                Login
              </Button>
              <Button color='inherit' component={Link} to='/'>
                Home
              </Button>
              <Button color='inherit' component={Link} to='/signup'>
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
