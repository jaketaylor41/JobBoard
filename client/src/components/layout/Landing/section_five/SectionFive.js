import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './SectionFive.module.css';

const SectionFive = (props) => {
	return (
		<section className={classes.section_five}>
			<div className={classes.section_five_body}>
				<h2>
					Discover new opportunities and begin your journey on FirstEmbark.
				</h2>
				<Link className={classes.section_five_btn}>Embark</Link>
			</div>
		</section>
	);
};

SectionFive.propTypes = {};

export default SectionFive;
