//Component to display the list of todo items

import React from 'react';

const TodoList = ({ todos, deleteTodo, markComplete, sortItems }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className="collection-item avatar valign-wrapper">
          {
            todo.complete ? <i className="material-icons circle green">done</i> : <i className="material-icons circle blue">list</i>
          }
          <span className="title">{todo.content}</span>
          <span className="secondary-content mt10">
            <a className="waves-effect waves-light btn-small mr40" onClick={() => { markComplete(todo.id) }}><i className="material-icons left">cloud_done</i>Mark as done</a>
            <a href="#!" className="waves-effect waves-light mr10" onClick={() => { deleteTodo(todo.id) }}><i className="material-icons red-text">delete</i></a>
          </span>
        </li>
      )
    })
  ) : (
      <p className="center">Hurray! you have no outstanding tasks to be completed.</p>
    );

  return (
    <div>
      {
        todos.length > 1 ?
        <div className="sort-options">
          <div className="sortByName right-align mb20">
            <a class="waves-effect waves-light btn-large" onClick={sortItems()}>Sort by name</a>
          </div>
        </div> : void(0)
      }
      <ul className="collection">
        {todoList}
      </ul>
    </div>

  )
}

export default TodoList;


