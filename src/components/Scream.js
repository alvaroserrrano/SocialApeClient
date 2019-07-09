import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';
//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
	card: {
		display: 'flex',
		marginBottom: 20,
		position: 'relative'
	}
};

class Scream extends Component {
	render() {
		const {
			classes,
			scream: { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount }
		} = this.props;
		return (
			<Card>
				<CardMedia image={userImage} title='Profile Image' />
				<CardContent>
					<Typography variant='h5'>{userHandle}</Typography>
					<Typography variant='body2' color='textSecondary'>
						{createdAt}
					</Typography>
					<Typography variant='body1'>{body}</Typography>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(Scream);
