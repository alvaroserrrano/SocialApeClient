import React, { Component } from 'react';
import { Link } from 'react-router-dom/';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
//MUI stuff
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ToolTip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
//Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
//Redux
import { connect } from 'react-redux';
import { markNotificationsRead } from '../../redux/actions/userActions';

class Notifications extends Component {
  state = {
    anchorEl: null
  };
  render() {
    const { notifications } = this.props.notifications;
    const anchorEl = this.state.anchorEl;
    let notificationIcon;
    if (notifications && notifications.length > 0) {
      notifications.filter(note => note.read === false).length > 0
        ? (notificationIcon = (
            <Badge
              badgeContent={
                notifications.filter(note => note.read === false).length
              }
              color='secondary'
            >
              <NotificationsIcon />
            </Badge>
          ))
        : (notificationIcon = <NotificationsIcon />);
    } else {
      notificationIcon = <NotificationsIcon />;
    }
    return <div />;
  }
}

Notifications.propTypes = {
  markNotificationsRead: PropTypes.func.isRequired,
  notifications: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  notifications: state.user.notifications
});

export default connect(
  mapStateToProps,
  { markNotificationsRead }
)(Notifications);
