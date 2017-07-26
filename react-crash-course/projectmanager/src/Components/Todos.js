import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    let todos;
    if(this.props.todos) {
      todos = this.props.todos.map(todo => {
        return (
          <Todo
            key={todo.title}
            todo={todo}
            delToDo={this.props.delTodo}
          />);
      });
    }
    return (
      <div className="Todos">
        <h3>To Dos</h3>
        {todos}
      </div>
    );
  }
}

export default Todos;
