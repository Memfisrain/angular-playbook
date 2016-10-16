appStart.$inject = ['$rootScope', 'alerting'];

export default function appStart($rootScope, alerting) {
	$rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
		alerting.addDanger(`Could not load ${toState.name}`);
	});
};