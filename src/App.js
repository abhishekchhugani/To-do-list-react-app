// This is the main app container where the page loads

import React, { Component } from 'react';
import AppHeader from './components/AppHeader'
import AddItem from './components/AddItem'
import TodoList from './components/TodoList'
import TaskSummary from './components/TaskSummary'
import index from './index.css'

class App extends Component {
  state = {
    todos: []
  }
  //function to delete a to do item
  deleteTodoItem = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  //Function to mark a to do item complete
  markComplete = (id) => {
    const todos = this.state.todos
    todos.map(todo => {
      todo.complete = todo.id === id ? true : todo.complete
    });
    this.setState({
      todos
    });
  }

  //Function to add a new to do item
  addTodoItem = (todoItem) => {
    let todos = this.state.todos
    todos.push(todoItem)
    this.setState({
      todos
    });
  }

  //function to sort the to do item
  sortItems = () => {
    let todos = this.state.todos
    todos.sort(function (a, b) {
      var nameA = a.content.toLowerCase(), nameB = b.content.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      return 0;
    });
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="container mt40 center">
          <TaskSummary todos={this.state.todos} />
          <AddItem addTodoItem={this.addTodoItem} />
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodoItem} markComplete={this.markComplete} sortItems={() => this.sortItems}/>
        </div>
      </div>
    );
  }
}

export default App;
