import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {
	constructor() {
		super();
		
		this.state = {
			todoData : [
				{ label: 'Drink coffee', important: false, id: 1 },
				{ label: 'Build Awesome App', important: true, id: 2 },
				{ label: 'Have a lunch', important: false, id: 3 },
			]
		};

		this.deleteItem = (id) => {
			this.setState(({ todoData }) => {
				const idx = todoData.findIndex((el) => el.id === id);
				const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

				return {
					todoData: newArr
				}
			});
		};
	};

	render() {
		return (
			<div className="todo-app">
					<AppHeader toDo={1} done={3} />
					<div className="top-panel d-flex">
							<SearchPanel />
							<ItemStatusFilter />
					</div>
					<TodoList 
							todos = { this.state.todoData }
							onDeleted = { this.deleteItem }
					/>
			</div>
		);
	}
};
