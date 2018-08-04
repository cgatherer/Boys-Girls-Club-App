var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Intro = require('Intro');
var About = require('About');
var Maps = require('Maps');

// Load CSS
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!app/slick.css');
require('style!css!app/main.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Intro}/>
      <Route path="about" component={About}/>
      <Route path="maps" component={Maps}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
