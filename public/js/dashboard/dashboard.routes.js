routing.$inject = ['$stateProvider'];

export default function routing($stateProvider) {
	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			template: require('./dashboard.html'),
			controller: 'Dashboard',
			controllerAs: 'dashboard'
		})
			.state('costs', {
				parent: 'dashboard',
				url: '/costs',
				template: require('./costs/costs.html'),
				controller: 'Costs',
				controllerAs: 'costs'
			})
			.state('overall', {
				parent: 'dashboard',
				url: '/overall',
				template: require('./overall/overall.html'),
				controller: 'Overall',
				controllerAs: 'overall'
			})
			.state('customers', {
				parent: 'dashboard',
				url: '/customers',
				template: require('./customers/customers.html'),
				controller: 'Customers',
				controllerAs: 'customers'
			})
			.state('injuries', {
				parent: 'dashboard',
				url: '/injuries',
				template: require('./injuries/injuries.html'),
				controller: 'Injuries',
				controllerAs: 'injuries'
			});
};