import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  handleSubmit = (e) => {
    let refs = this.refs;
    if (refs.title.value === '') {
      alert('Title is required!');
    } else {
      this.setState({newProject:
        {title: refs.title.value, category: refs.category.value, id: uuid.v4()}
      }, () => {
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  render() {
    let categories = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title: <input type="text" ref="title" /></label>,
          <label>Category:
            <select ref="category">
              {categories}
            </select>
          </label>,
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  handleSubmit: PropTypes.func,
  addProject: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string)
}

export default AddProject;
