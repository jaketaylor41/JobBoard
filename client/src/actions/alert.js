import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// setAlert takes in a error msg, and an alertType to match the style
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
	// Generate a random id
	const id = uuid();

	// Dispatch alert to reducer with the payload
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id },
	});

	// Remove alert after 5 seconds, send id of alert to reducer to be filtered
	setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
