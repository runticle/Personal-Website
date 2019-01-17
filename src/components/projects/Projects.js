import React, { Component } from 'react';

import NavBar from '../NavBar'
import Project from './Project'

class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/runticle/repos")
      .then(res => res.json())
      .then((res) => {
        this.getProjectsArray(res)
      })
  }

  getProjectsArray(json){
    let projectArray = []
    json.forEach(function(proj) {
      projectArray.push({name: proj.name, link: proj.html_url})
    })
    this.setState({
      projects: projectArray
    })
  }

  render() {
    return (
      <div>
        <NavBar/>
        {this.state.projects.map(function(proj, index) {
          return <Project key={index} name={proj.name} link={proj.link}/>
        })}
      </div>
    );
  }

}

export default Projects;
