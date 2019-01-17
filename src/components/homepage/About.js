import React, { Component } from 'react';

class About extends Component {

  render() {

    const style = {

    }
    return (
      <div className="about">
        <h5>STUFF ABOUT ME</h5>
        <img className="prof-pic" src="/assets/smiley.jpg"/>
        <ul className="list-group about-list">
          <li>Aspiring software developer</li>
          <li><a href="https://makers.tech/" target="_blank">Makers Academy</a> Graduate</li>
          <li>BEng Mechanical Engineering</li>
          <li>Blockchain Advocate</li>
          <li></li>
        </ul>
      </div>
    );
  }

}

export default About;
