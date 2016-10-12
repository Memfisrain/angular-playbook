requestCounter.$inject = ['$q'];

export default function requestCounter($q) {
	let requests = 0;

	return {
		request,
		response,
		requestError,
		responseError,
		getRequestCount
	};

	function request(req) {
		requests++;
		
		return $q.resolve(req);
	}

	function response(res) {
		requests--;
		
		return $q.resolve(res);
	}

	function requestError(err) {
		requests--;
		
		return $q.reject(err);
	}

	function responseError(err) {
		requests--
		
		return $q.reject(err);
	}

	function getRequestCount() {
		return requests;
	}
}