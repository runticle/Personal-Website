import React, { Component } from 'react';

class MakersRich extends Component {

  componentDidMount(){
    var modal = document.getElementById('myModal');
    var img = document.getElementById('makers-img');
    var modalImg = document.getElementById("img01");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = img.src;
    }
    window.addEventListener('keydown', function(e) {
      e.preventDefault()
      e.target.removeEventListener('keydown', this.function)
      modal.style.display = 'none'
    })
  }

  render() {
    return (
      <div id="makersrich">
        <h4>MakersRich</h4>
        <img className="project-img" id="makers-img" alt="Missing!" src="/assets/makersrich.png"/>
        <ul>
          <li><a href="https://makerzrich.firebaseapp.com/">Play here!</a></li>
          <li><a href="https://github.com/toddpla/makersrich">Github Link</a></li>
          <li>Team size: 5</li>
          <li>Timeframe: 2 weeks</li>
          <li>Tech: React, Redux, Firebase</li>
        </ul>
        <p>
          Given 10 days for our final project, we made an Educational Multiplayer Online RPG. We used React and Redux, with Google Firebase to allow realtime updates via web sockets.
        </p>
        <div id="myModal" class="modal">
          <img class="modal-content" alt="Missing!" id="img01"/>
        </div>
      </div>



    );
  }

}

export default MakersRich;
