import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/iconfinder_Gnome-Face-Monkey-64_55619.png';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//Redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
const styles = {
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
  signUpLink: {
    marginTop: '25px',
    color: '#ffffff'
  },
  buttonProgress: {
    position: 'absolute'
  }
};

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt='monkey' className={classes.image} />
          <Typography
            variant='h2'
            color='secondary'
            className={classes.pageTitle}
          >
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id='email'
              name='email'
              type='email'
              label='Email'
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id='password'
              name='password'
              type='password'
              label='Password'
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant='body2' className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress
                  size={40}
                  className={classes.buttonProgress}
                />
              )}
            </Button>
            <br />
            <small className={classes.signUpLink}>
              Don't have an account?{' '}
              <Link to='/signup' style={{ color: 'rgba(155, 250, 78)' }}>
                {' '}
                Create one here
              </Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
