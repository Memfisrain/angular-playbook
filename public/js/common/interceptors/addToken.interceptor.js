addToken.$inject = ['currentUser'];

export default function addToken(currentUser) {

	return {request};

	function request(config) {		
		if(currentUser.profile.loggedIn) {
			config.headers.Authorization = `Bearer ${currentUser.profile.token}`;
		}

		return config;
	}
}