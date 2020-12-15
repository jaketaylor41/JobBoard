import React from 'react';
import PropTypes from 'prop-types';
import classes from './SectionTwo.module.css';
import { Link } from 'react-router-dom';

const SectionTwo = (props) => {
	return (
		<section className={classes.section_two}>
			<div className={classes.section_two_body}>
				<h2>Find up-and-coming talent</h2>
				<p>
					<span>
						Post jobs and find passionate employees who are eager to begin their
						new career.
					</span>
				</p>
				<Link className={classes.post_btn}>Post a Job</Link>
			</div>
		</section>
	);
};

SectionTwo.propTypes = {};

export default SectionTwo;
