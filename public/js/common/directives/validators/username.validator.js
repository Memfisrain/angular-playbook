username.$inject = ['$http', '$q'];

export default function username($http, $q) {

	function processResponse(res) {
		return res.status !== 200? $q.reject(false) : $q.resolve(true);
	}

	function validateUsername(value) {
		return $http
			.get(`/api/namevalidation?name=${encodeURIComponent(value)}`)
			.then(processResponse)
			.catch(processResponse);
		
	}

	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$asyncValidators.username = validateUsername;
		}
	}
}