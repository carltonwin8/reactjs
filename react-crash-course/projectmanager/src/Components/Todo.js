import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDo extends Component {
  delToDo = () => {
    this.props.delToDo(this.props.todo.id);
  }
  render() {
    let todo = this.props.todo;
    return (
      <li className="ToDo">
        <strong>{todo.title}</strong>,
        <button onClick={this.delToDo}>Remove</button>
      </li>
    );
  }
}

ToDo.propTypes = {
  delToDo: PropTypes.func,
  ToDo: PropTypes.object
}
export default ToDo;
