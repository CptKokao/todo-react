import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'active', label: 'Active'},
      {name: 'done', label: 'Done'}
    ]
  }

  renderButtons = () => {
    const {onFilterChange, filter} = this.props;

    return this.buttons.map(({name, label}) => {
      const isActive = filter === name ? 'btn-info' : 'btn-outline-secondary';
      
      return <button type="button" 
                     className = {`btn ${isActive}`}
                     key = {name} 
                     onClick={() => onFilterChange(name)}>{label}</button>
    })
  }

  render() {
    return (
      <div className="btn-group">
        {this.renderButtons()}
      </div>
    );
  }
}