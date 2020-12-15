import React from 'react';
import PropTypes from 'prop-types';
import logo_blue from '../../../../assets/images/logo-blue.png';
import { Link } from 'react-router-dom';
import classes from './SectionSix.module.css';

const SectionSix = (props) => {
	return (
		<section className={classes.section_six}>
			<div className={classes.section_six_body}>
				<img className={classes.section_six_logo} src={logo_blue} alt='' />
				<div className={classes.section_six_group}>
					<div className={classes.group_col}>
						<p>General</p>
						<ul className={classes.col_list}>
							<li>
								<Link className={classes.list_link}>Sign Up</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Help</Link>
							</li>
							<li>
								<Link className={classes.list_link}>About</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Press</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Blog</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Careers</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Developers</Link>
							</li>
						</ul>
					</div>

					<div className={classes.group_col}>
						<p>Browse</p>
						<ul className={classes.col_list}>
							<li>
								<Link className={classes.list_link}>Learning</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Jobs</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Salary</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Mobile</Link>
							</li>
							<li>
								<Link className={classes.list_link}>People</Link>
							</li>
						</ul>
					</div>

					<div className={classes.group_col}>
						<p>Business</p>
						<ul className={classes.col_list}>
							<li>
								<Link className={classes.list_link}>Talent</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Marketing</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Sales</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Learning</Link>
							</li>
						</ul>
					</div>
					<div className={classes.group_col}>
						<p>Directories</p>
						<ul className={classes.col_list}>
							<li>
								<Link className={classes.list_link}>Members</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Jobs</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Companies</Link>
							</li>
							<li>
								<Link className={classes.list_link}>Salaries</Link>
							</li>
							<li>
								<Link className={classes.list_link}>News</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

SectionSix.propTypes = {};

export default SectionSix;
