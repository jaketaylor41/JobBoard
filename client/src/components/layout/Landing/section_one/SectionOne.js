import React from 'react';
import PropTypes from 'prop-types';
import interview from '../../../../assets/images/interview.jpg';
import classes from './SectionOne.module.css';

const SectionOne = (props) => {
	return (
		<section className={classes.section_one}>
			<h2>Real entry level positions.</h2>
			<div className={classes.section_one_body}>
				<div style={{ minWidth: '650px' }}>
					<p>
						<span>
							Tired of seeing <strong>entry level</strong> positions requiring
							years of professional experience?
						</span>
						<br />
						<span>
							Jobs marked as "entry level" but are actually looking for senior
							level?
						</span>
						<br />
						<span>Laundry lists of unrealistic requirements?</span>
						<br />
						<span>So are we.</span>
					</p>
					<div style={{ paddingTop: '20px' }}>
						<p>
							<span>
								At FirstEmbark, we are dedicated to those seeking their first
								career job. Our goal is to make the search easier by
								decluttering online job boards and establishing a community for
								students, new grads, and those looking for a new start.
							</span>
						</p>
					</div>
				</div>
				<div>
					<img className={classes.section_one_img} src={interview} alt='' />
				</div>
			</div>
		</section>
	);
};

SectionOne.propTypes = {};

export default SectionOne;
