import React from 'react';
import PropTypes from 'prop-types';
import connect_img from '../../../../assets/images/connect.jpg';
import { Link } from 'react-router-dom';
import classes from './SectionThree.module.css';

const SectionThree = (props) => {
	return (
		<section className={classes.section_three}>
			<div className={classes.section_three_body}>
				<img className={classes.section_three_img} src={connect_img} alt='' />
				<div className={classes.section_three_div}>
					<h2>Connect with others in your field</h2>
					<p>
						<span>
							Join or start forums in your industry to meet people and discover
							new opportunities.
						</span>
					</p>
					<p>
						<span>
							Use filters to easily discover topics that are most relevent to
							you.
						</span>
					</p>
					<h4>FEATURED FORUMS</h4>
					<div className={classes.featured_link_group}>
						<div className={classes.featured_btn}>
							<Link className={classes.featured_link}>Engineering</Link>
							<i className='fas fa-angle-right'></i>
						</div>
						<div className={classes.featured_btn}>
							<Link className={classes.featured_link}>Health & Medicine</Link>
							<i className='fas fa-angle-right'></i>
						</div>
						<div className={classes.featured_btn}>
							<Link className={classes.featured_link}>Business</Link>
							<i className='fas fa-angle-right'></i>
						</div>
						<div className={classes.featured_btn}>
							<Link className={classes.featured_link}>Education</Link>
							<i className='fas fa-angle-right'></i>
						</div>
						<div className={classes.featured_btn}>
							<Link className={classes.featured_link}>
								Arts & Entertainment
							</Link>
							<i className='fas fa-angle-right'></i>
						</div>
						<div className={classes.featured_btn}>
							<Link className={classes.featured_link}>Sciences</Link>
							<i className='fas fa-angle-right'></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

SectionThree.propTypes = {};

export default SectionThree;
