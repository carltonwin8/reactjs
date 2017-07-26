import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import uuid from 'uuid';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getToDos = () => {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({todos: data}, () => {
          console.log(this.state);
        });
      },
      error: (xhr, status, e) => {
        console.log(e);
      }
    })
  }

  getProjects = () => {
    this.setState({projects: [
      { title: 'Business Website', category: 'Web Design', id: uuid.v4()},
      { title: 'Social App', category: 'Mobile Development', id: uuid.v4()},
      { title: 'E-Commerce Shopping Cart', category: 'Web Development', id: uuid.v4()}
    ]})
  }
  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }
  addProject = (project) => {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  delProject = (id) => {
    let projects = this.state.projects;
    let newProjects = projects.filter((project) => {
      return id !== project.id;
    });
    this.setState({projects:newProjects});
  }

  delTodo = (id) => {
    let todos = this.state.todos;
    let newTodos = todos.filter((todo) => {
      return id !== todo.id;
    });
    this.setState({todos:newTodos});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.addProject}/>
        <Projects projects={this.state.projects} delProject={this.delProject} />
        <Todos todos={this.state.todos} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
