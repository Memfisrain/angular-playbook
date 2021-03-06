Secret.$inject = ['$http'];

export default function Secret($http) {
	let vm = this;

	vm.recipe = {};
	vm.getSecret = getSecret;

	vm.throwErr = throwErr;

	getSecret();

	//////////////////////////
	function getSecret() {
		$http.get('/api/secret')
			.then(res => {
				Object.assign(vm.recipe, res.data.recipe);
			})
			.catch(err => {
				console.info(err);
			});
	}

	function throwErr() {
		throw new Error('Something has gone wrong');
	}
}
