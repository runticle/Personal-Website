import React, { Component } from 'react';

import NavBar from '../NavBar'
import Project from './Project'
import MakersRich from './MakersRich'

class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/runticle/repos?sort=created")
      .then(res => res.json())
      .then((res) => {
        this.getProjectsArray(res)
      })


  }

  getProjectsArray(json){
    let projectArray = []
    json.forEach(function(proj) {
      projectArray.push({name: proj.name, link: proj.html_url, description: proj.description})
    })
    this.setState({
      projects: projectArray
    })
  }

  render() {
    return (
      <div>
        <NavBar/>
        <div id="project-page">
          <h2>GITHUB PROJECTS</h2>
          <p id="projects-description" className="col-sm container">
            Here lies all public project repos I have on github from the very beginning. Yes, most of them are unfinished, and not brilliant to boot. It is a learning curve and hopefully you can see improvments along the way!
          </p>
          <MakersRich/>
          {this.state.projects.map(function(proj, index) {
            return <Project key={index} name={proj.name} link={proj.link} description={proj.description}/>
          })}
        </div>
      </div>
    );
  }

}

export default Projects;
