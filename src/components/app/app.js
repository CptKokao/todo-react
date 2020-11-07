import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAdd from '../item-add';

import './app.css';

export default class App extends Component {
	constructor() {
		super();

		this.id = 100;
		
		this.state = {
			todoData : [
				{ label: 'Drink coffee', important: false, id: 1 },
				{ label: 'Build Awesome App', important: true, id: 2 },
				{ label: 'Have a lunch', important: false, id: 3 },
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

			return {
				todoData: newArr
			}
		});
	}

	addItem = () => {
		this.setState(({ todoData }) => {
			const newItem = { 
				label: 'TestAddItem', 
				important: true, 
				id: this.id++
			};
			
			const newArr = [
				...todoData,
				newItem
			]

			return {
				todoData: newArr
			}
		});
	}

	toggleImportant = (id) => {
		console.log('important', id);
	}

	toggleDone = (id) => {
		console.log('done', id);
	}

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
						onToggleImportant = { this.toggleImportant }
						onToggleDone = { this.toggleDone }
					/>
					<ItemAdd 
						onAddItem = { this.addItem }
					/>
			</div>
		);
	}
};
