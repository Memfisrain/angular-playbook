routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('secret', {
			url: '/secret',
			template: require('./secret.html'),
			controller: 'Secret',
			controllerAs: 'secret'
		});
}