import React, { Component } from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

class Projects extends Component {
  render() {
    let projects;
    if(this.props.projects) {
      projects = this.props.projects.map(project => {
        return (
          <Project
            key={project.title}
            project={project}
            delProject={this.props.delProject}
          />);
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projects}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array  
}
export default Projects;
