var React = require('react');
var {Link} = require('react-router');

import mainLogo from '../assets/main-logo.png';
import circleIMG from '../assets/circle.png';
import student from '../assets/student.png'

var Instructions = React.createClass({
  render: function () {
    return (
      <div className="cd-instructions">
        <div className="carousel">
          <div>
            <img className="main-logo main-logo-intructions" src={mainLogo} alt="Feed AC Logo" />
            <img className="circle-map" src={circleIMG} alt="Circle Map" />
            <p className="instrustions-para">We’d like to use your LOCATION! We’d like to help you find the nearest food pantry.</p>
            <div className="enter-btn-container">
              <Link to="/maps" className="large button enter-btn">LET's EXPLORE!</Link>
            </div>
          </div>
          <div>
            <img className="" src={'http://nightowlmedia.co/images/student.png'} alt="Student" />
            <img className="main-logo main-logo-intructions" src={mainLogo} alt="Feed AC Logo" />
            <div className="enter-btn-container">
              <Link to="/maps" className="large button enter-btn">LET's EXPLORE!</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Instructions;
