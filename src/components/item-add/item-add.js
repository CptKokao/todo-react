import React, { Component } from 'react';

import './item-add.css';

export default class ItemAdd extends Component {
	constructor() {
		super();

		this.state = {
			label: ''
		}
	}

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		})
	}

	onSubmitForm = (e) => {
		e.preventDefault();

		this.props.onAddItem(this.state.label);
	}

	render() {
		return (
			<form className="item-add d-flex"
						onSubmit={this.onSubmitForm}>
				<input type="text"
							 className="form-control"
							 onChange={this.onLabelChange}
							 placeholder="What needs to be done"
				></input>
				<button className="btn btn-outline-secondary">Add item</button>
			</form>
		);
	}
}