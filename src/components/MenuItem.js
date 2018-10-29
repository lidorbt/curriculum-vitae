import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button'
import { withStyles } from '@material-ui/core';
class MenuItem extends Component {
	render() {
		const { classes, targetInfo, style, ...rest } = this.props;
		const isActive = targetInfo.active ? Styles.active : null;

		return (<Button style={{
			classes
		}
		} {...rest} />);
	}
}

const Styles = theme => ({
	disabled: {

	},
	active: {
		opacity: 1
	},
})

export default withStyles(Styles)(MenuItem)