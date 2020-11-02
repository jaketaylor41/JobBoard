import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<section className='landing'>
			<div className='landing-inner'>
				<h1>FirstEmbark</h1>
				<p>Your journey starts here</p>
				<div>
					<Link to='/register' className='btn'>
						Sign Up
					</Link>
					<Link to='/login' className='btn'>
						Login
					</Link>
				</div>
			</div>
		</section>
	);
};

Landing.prototypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
