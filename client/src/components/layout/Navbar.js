import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import classes from './Navbar.module.css';
import white_logo from '../../assets/images/FirstEmbarkLogoWhite.png';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to='/posts'>Home</Link>
			</li>
			<li>
				<Link to='/dashboard'>Dashboard</Link>
			</li>
			<li>
				<Link to='/profiles'>Connections</Link>
			</li>
			<li>
				<Link to='/posts'>Posts</Link>
			</li>
			<li>
				<a onClick={logout} href='#!'>
					<i className='fas fa-sign-out-alt'></i>{' '}
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to='/register'>Join Now</Link>
			</li>
			<li>
				<Link to='/login'>Sign in</Link>
			</li>
		</ul>
	);
	return (
		<nav className={classes.navbar}>
			<Link to='/'>
				<div className={classes.navbar_logo_div}>
					<img style={{ width: '20vw' }} src={white_logo} alt='' />
				</div>
			</Link>
			<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
		</nav>
	);
};

Navbar.prototypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
