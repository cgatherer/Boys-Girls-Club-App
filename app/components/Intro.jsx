var React = require('react');
var {Link} = require('react-router');

import mainLogo from '../assets/main-logo.png';

var Intro = React.createClass({
  render: function () {
    return (
      <div className="cd-intro">
        <div>
          <div className="cd-login center">
            <p className="main-title">Welcome to</p>
            <img className="main-ACBGC-logo" src={'http://nightowlmedia.co/images/ACBGC-logo.png'} alt="ACBGC Logo" />
            <img className="main-logo" src={mainLogo} alt="Feed AC Logo" />
            <p className="main-title">Project</p>
            <p className="main-arrow">&or;</p>
            <Link to="/about" className="enter">ENTER</Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Intro;
