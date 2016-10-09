addToken.$inject = ['currentUser'];

export default function addToken(currentUser) {

	return {request};

	function request(config) {		
		if(currentUser.profile.loggedIn) {
			config.headers.Authentication = `Bearer ${currentUser.profile.token}`;
		}

		config.params = Object.assign(config.params || {}, {client_id: 'thom', client_secret: 'nightworld'});

		return config;
	}
}