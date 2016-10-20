import angular from 'angular';

oauth.$inject = ['$http', 'formEncode', 'currentUser'];

function oauth($http, formEncode, currentUser) {
	return {
		login
	};

	function login(username, password) {

		let config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}

		let data = formEncode({
			username, 
			password, 
			grant_type: 'password', 
			client_id: 'thom', 
			client_secret: 'nightworld'
		});

		return $http.post('/login', data, config)
			.then(res => {
				currentUser.setProfile({username, token: res.data.access_token});
			});
	}
}

export default oauth;