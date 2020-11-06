import React, { Component } from 'react';

import './item-add.css';

export default class ItemAdd extends Component {
	render() {
		return (
			<div className="item-add">
				<button
					className="btn btn-outline-secondary"
					onClick={ this.props.onAddItem }
				>Add item</button>
			</div>
		);
	}
}