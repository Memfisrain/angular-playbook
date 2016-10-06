routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			template: require('./login.html'),
			controller: 'Login',
			controllerAs: 'login'
		});
}