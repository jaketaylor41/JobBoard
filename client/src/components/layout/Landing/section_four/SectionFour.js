import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../UI/Card';
import working from '../../../../assets/images/working.jpg';
import connect_blog from '../../../../assets/images/connection-blog.jpg';
import hire from '../../../../assets/images/hire.jpg';
import classes from './SectionFour.module.css';

const SectionFour = (props) => {
	return (
		<section className={classes.section_four}>
			<header className={classes.section_head}>
				<h4>GUIDES FROM OUR EXPERTS</h4>
			</header>
			<div className={classes.section_four_body}>
				<Card
					cardImg={working}
					cardTitle='How to Maximize Your Resume With Little to No Experience'
					cardBody='Finding a job right out of college can be difficult, especially without any related experience. However, there are ways to edit your resume in a way that highlights how you are the right one for the job.'
				/>
				<Card
					cardImg={connect_blog}
					cardTitle='Setting Up Your Success Through Effective Networking'
					cardBody='One of the most effective ways to quickly find work is to network. There are multiple ways to reach out to new people and discover opportunities, and here we have some tips on how to go about it.'
				/>
				<Card
					cardImg={hire}
					cardTitle='Not Hearing Back from Employers After You Apply? Here are Some Tips (Career FAQ)'
					cardBody='Struggling to find your first job out of college? You are not alone. Here are some tips that I hope will help you land interviews and a job.'
				/>
			</div>
		</section>
	);
};

SectionFour.propTypes = {};

export default SectionFour;
