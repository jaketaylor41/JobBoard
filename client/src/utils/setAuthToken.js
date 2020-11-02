import axios from 'axios';

// Token comes from localstorage
// Check to see if there is a token in localstorage
// When there is a token, send with every request instead of picking and choosing which request to send it with
const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common['x-auth-token'] = token;
	} else {
		delete axios.defaults.headers.common['x-auth-token'];
	}
};

export default setAuthToken;
