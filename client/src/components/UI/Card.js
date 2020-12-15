import React from 'react';
import classes from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
	return (
		<div className={classes.card}>
			<img className={classes.card_img_top} src={props.cardImg} alt='' />
			<div className={classes.card_body}>
				<h3 className={classes.card_title}>{props.cardTitle}</h3>
				<p className={classes.card_text}>{props.cardBody}</p>
			</div>
			<hr
				style={{
					backgroundColor: 'rgba(0,0,0,0.1)',
					border: '0',
					height: '2px',
				}}
			/>
			<p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.6)', padding: '4px' }}>
				12/08/2020 • No Comments
			</p>
		</div>
	);
};

export default Card;
