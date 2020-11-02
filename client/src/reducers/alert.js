import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

// eslint-disable-next-line
export default function (state = initialState, action) {
	const { type, payload } = action;

	// Add payload to the array
	switch (type) {
		case SET_ALERT:
			return [...state, payload];
		case REMOVE_ALERT:
			// Filter out payload, as long as id doesnt match payload then return it
			return state.filter((alert) => alert.id !== payload);
		default:
			return state;
	}
}
