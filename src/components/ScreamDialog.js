import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { getScream } from '../redux/actions/dataActions';
//MUI stuff
import MyButton from '../util/MyButton';
import dayjs from 'dayjs';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//Icons
import CloseIcon from '@material-ui/icons/Close';

const styles = {};

class ScreamDialog extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
    this.props.getScream(this.props.screamId);
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
    render() {
        const {classes, scream: {screamId, body, createdAt, likeCount, commentCount, userImage, userHandle}}
        return (

        )
    }
}

ScreamDialog.propTypes = {
  getScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  scream: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ScreamDialog));
