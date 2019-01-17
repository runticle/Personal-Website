import React, { Component } from 'react';

class About extends Component {

  render() {

    const style = {

    }
    return (
      <div className="about">
        <h5> ABOUT ME </h5>
        <img className="prof-pic" src="/assets/smiley.jpg"/>
        <ul className="list-group about-list col">
          <li>Aspiring software developer</li>
          <li><a href="https://makers.tech/" target="_blank">Makers Academy</a> Graduate</li>
          <li>Mechanical Engineering Graduate</li>
        </ul>
      </div>
    );
  }

}

export default About;
