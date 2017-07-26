import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  deleteProject = () => {
    this.props.delProject(this.props.project.id);
  }
  render() {
    let project = this.props.project;
    return (
      <li className="Project">
        <strong>{project.title}</strong> - {project.category},
        <button onClick={this.deleteProject}>Remove</button>
      </li>
    );
  }
}

Project.propTypes = {
  deleteProject: PropTypes.func,
  project: PropTypes.object
}
export default Project;
