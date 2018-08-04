var React = require('react');
var {Link, IndexLink} = require('react-router');

// Imported Images
import Logo from '../assets/feedac-logo.png';

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <header className="cd-header">
          <a className="cd-primary-nav-trigger" href="javascript:void(0)">
      			<span className="cd-menu-icon"></span>
      		</a>
          <div className="mobile-container">
            <Link to="/">
              <img className="mobile-logo" src={Logo} alt="Feed AC Logo" />
            </Link>
          </div>
      	</header>

        <nav>
      		<ul className="cd-primary-nav">
      			{/* <li className="cd-menu-link"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Intro</IndexLink></li> */}
      			<li className="cd-menu-link"><Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link></li>
      			<li className="cd-menu-link"><Link to="/maps" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Maps</Link></li>

      			{/* <li className="cd-label">Locations</li> */}

      			{/* <li><a href="#0">Start a project</a></li>
      			<li><a href="#0">Join In</a></li>
      			<li><a href="#0">Create an account</a></li>

      			<li className="cd-label">Follow us</li>

      			<li className="cd-social cd-facebook"><a href="#0">Facebook</a></li>
      			<li className="cd-social cd-instagram"><a href="#0">Instagram</a></li>
      			<li className="cd-social cd-dribbble"><a href="#0">Dribbble</a></li>
      			<li className="cd-social cd-twitter"><a href="#0">Twitter</a></li> */}
      		</ul>
      	</nav>
      </div>
    );
  }
});

module.exports = Nav;
