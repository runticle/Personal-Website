import React, { Component } from 'react';

class Project extends Component {

  render() {
    return (
      <div className="project-box col-sm container">
        <a href={this.props.link} target="_blank">{this.props.name}</a>
        <p>{this.props.description}</p>
      </div>
    );
  }

}

export default Project;
