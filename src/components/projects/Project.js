import React, { Component } from 'react';

class Project extends Component {

  render() {
    return (
      <div>
        <a href={this.props.link}>{this.props.name}</a>
      </div>
    );
  }

}

export default Project;
