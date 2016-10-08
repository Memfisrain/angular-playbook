routing.$inject = ['$urlRouterProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/', {
			url: '/',
			template: require('../home.html'),
		});
}