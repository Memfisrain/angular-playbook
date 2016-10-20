loginRedirect.$inject = ['$q', '$location'];

export default function loginRedirect($q, $location) {
	let lastPath = '/';

	return {
		responseError,
		redirectLastPath
	};

	function responseError(res) {
		lastPath = $location.path();

		if (res.status === 401) {
			$location.path('/login');
		}

		return $q.reject(res);
	}

	function redirectLastPath() {
		$location.path(lastPath);
		lastPath = '/';
	}
};