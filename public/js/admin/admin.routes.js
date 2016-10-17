routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider.state('admin', {
		url: '/admin',
		template: require('./admin.html'),
		controller: 'Admin',
		controllerAs: 'admin'
	});
}