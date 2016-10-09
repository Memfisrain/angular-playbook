addToken.$inject = ['currentUser'];

export default function addToken(currentUser) {

	return {request};

	function request(config) {
		if(currentUser.profile.loggedIn) {
			config.headers.Authentication = `Basic ${currentUser.profile.token}`;
		}

		return config;
	}
}