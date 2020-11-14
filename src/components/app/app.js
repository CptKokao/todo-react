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
				this.createTodoItem('Drink coffee'),
				this.createTodoItem('Build Awesome App'),
				this.createTodoItem('Have a lunch')
			],
			term: '',
			filter: 'all'
		}
	}

	// Создает новые item
	createTodoItem = (label) => {
		return  { 
			label, 
			important: false,
			done: false,
			id: this.id++
		};
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newArr = [...todoData.slice(0, idx), 
											...todoData.slice(idx + 1)];

			return {
				todoData: newArr
			}
		});
	}

	addItem = (label) => {
		this.setState(({ todoData }) => {
			const newItem = { 
				label, 
				important: false, 
				id: this.id++
			};

			return {
				todoData: [...todoData, newItem]
			}
		});
	}

	// Перезаписывает свойства объекта
	toogleProperty = (arr, id, propName) => {
		// Находим в массиве объект с нужным элементом по id
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem =  arr[idx];

		// Создаем новый объект на основе старого и перезаписывает свойство done
		const newItem = {...oldItem, [propName] : !oldItem[propName]};

		// Изменяем объект в массиве
		return [...arr.slice(0, idx),
						newItem,
					 ...arr.slice(idx + 1)];

	};

	toggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toogleProperty(todoData, id, 'important')
			}
		});
	}

	toggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toogleProperty(todoData, id, 'done')
			}
		});
	}

	search = (todoData, term) => {
		if(!term) {
			return todoData;
		}
			
		return todoData.filter((el) => {
											return el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1
										})
	}

	filter = (todoData, filter) => {
		switch (filter) {
			case 'All' :
				return todoData
			case 'Active' :
				return todoData.filter((el) => !el.done)
			case 'Done' :
				return todoData.filter((el) => el.done)
			default : 
				return todoData
		}
	}

	onSearhChange = (value) => {
		this.setState({term : value})
	}

	onFilterChange = (filter) => {
		this.setState({filter})
	}

	render() {
		const { todoData, term, filter } 	= this.state;

		const visibleItems = this.filter(this.search(todoData, term), filter);

		//  Определяем количество выполненых задач
		const doneCount = todoData.filter((el) => el.done).length;

		//  Определяем количество оставшихся задач
		const  todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
					<AppHeader toDo={todoCount} done={doneCount} />
					<div className="top-panel d-flex">
						<SearchPanel 
							onSearch = {this.onSearhChange}
						/>
						<ItemStatusFilter onFilterChange = {this.onFilterChange} filter = {filter}/>
					</div>
					<TodoList 
						todos = { visibleItems }
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
