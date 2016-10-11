pbAlerts.$inject = ['alerting'];

export default function pbAlerts(alerting) {
	return {
		restrict: 'EA',
		template: require('../../../templates/alerts.html'),
		scope: {},
		link: function(scope, element, attrs) {
			scope.alerts = alerting.currentAlerts;
		}
	};
}