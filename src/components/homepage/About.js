import React, { Component } from 'react';

class About extends Component {

  render() {

    const style = {

    }
    return (
      <div className="about">
        <div className="my-life">
          I am Alfie. I like coding and stuff and writing super long winded random text to test my websites and stuff. I love Bitcoin and Blockchain and other amazing Crypto's. I play <a href="https://www.youtube.com/watch?v=lnNSU4kbVvI&t=61s" target="_block">Korfball</a>. I love music.  I like reading stuff. I like travelling places. 
        </div>
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
