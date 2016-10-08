import angular from 'angular';

oauth.$inject = ['$http', 'formEncode', 'currentUser'];

function oauth($http, formEncode, currentUser) {
	return {
		login
	};

	function login(username, password) {

		let config = {
			headers: {
				'content-Type': 'application/x-www-form-urlencoded'
			}
		}

		let data = formEncode({username, password, grant_type: 'password'});

		return $http.post('/login', data, config)
			.then(res => {
				currentUser.setProfile(username, res.data.access_token);
			});
	}
}

export default oauth;