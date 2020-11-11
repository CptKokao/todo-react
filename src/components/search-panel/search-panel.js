import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    }
  }

	onSearchItem = (e) => {
    e.preventDefault();
    const value = e.target.value;

    this.setState({term: value})
    this.props.onSearch(value);
  }
  
  render() {

    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search" 
        onChange={this.onSearchItem}
        value={this.state.term}
      />
    );
  }
}