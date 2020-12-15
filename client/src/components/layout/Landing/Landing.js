import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Landing.module.css';

import Footer from '../Footer';
import SectionOne from './section_one/SectionOne';
import SectionTwo from './section_two/SectionTwo';
import SectionThree from './section_three/SectionThree';
import SectionFour from './section_four/SectionFour';
import SectionFive from './section_five/SectionFive';
import SectionSix from './section_six/SectionSix';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<div>
			<section className={classes.landing}>
				<div className={classes.landing_inner}>
					<h2>Your career starts here.</h2>
					<section className={classes.search_section}>
						<div className={classes.search}>
							<div className={classes.search_categories}>
								<ul>
									<li>
										<Link className='btn-landing' to='/posts'>
											Jobs
										</Link>
									</li>
									<li>
										<Link className='btn-landing' to='/dashboard'>
											People
										</Link>
									</li>
								</ul>
							</div>
							<section className={classes.search_bar_group}>
								<form className={classes.search_form} action='/jobs'>
									<section className={classes.search_bar_section_job}>
										<input
											type='text'
											placeholder='Search job titles or companies'
											className={classes.search_bar}
										/>
									</section>
									<section className={classes.search_bar_section_location}>
										<input
											type='text'
											placeholder='Location'
											className={classes.search_bar}
										/>
									</section>
									<button className={classes.search_btn}>Search</button>
								</form>
							</section>
						</div>
					</section>
				</div>
			</section>
			<div className={classes.landing_body}>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<SectionFive />
				<SectionSix />
			</div>
			<Footer />
		</div>
	);
};

Landing.prototypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
