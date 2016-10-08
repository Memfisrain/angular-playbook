configure.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];

export default function configure($urlRouterProvider, $stateProvider, $httpProvider) {
	routing($urlRouterProvider, $stateProvider);
	httpInteractions($httpProvider);
}

function routing($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/', {
			url: '/',
			template: require('../home.html'),
		});
}

function httpInteractions($httpProvider) {
	$httpProvider.interceptors.push('addToken');
}