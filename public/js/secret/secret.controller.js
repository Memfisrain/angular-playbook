Secret.$inject = ['$http'];

export default function Secret($http) {
	let vm = this;

	vm.recipe = {title: 'My Super Recipe'};
	vm.getSecret = getSecret;

	getSecret();

	//////////////////////////
	function getSecret() {
		$http.get('/api/secret')
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.info(err);
			});
	};
}
