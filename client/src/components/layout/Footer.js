import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo_black from '../../assets/images/logo-black.png';
import classes from './Footer.module.css';

const Footer = (props) => {
	return (
		<footer className={classes.footer}>
			<ul className={classes.footer_list}>
				<li>
					<img className={classes.footer_logo} src={logo_black} alt='' />
					<span>© 2020</span>
				</li>
				<li>
					<Link className={classes.footer_link}>About</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>Accessibility</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>User Agreement</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>Privacy Policy</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>Cookie Policy</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>Copyright Policy</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>Brand Policy</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>Guest Controls</Link>
				</li>
				<li>
					<Link className={classes.footer_link}>Community Guidelines</Link>
				</li>
			</ul>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
