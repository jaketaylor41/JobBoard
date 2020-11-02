import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/dashboard'>Dashboard</Link>
			</li>
			<li>
				<Link to='/'>Connections</Link>
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
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>FirstEmbark</Link>
			</h1>
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
