var React = require('react');
var Nav = require('Nav');

import {TransitionGroup, CSSTransition} from 'react-transition-group';

var Main = React.createClass({
  render: function () {
    return (
      <div className="cd-main-container">
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
