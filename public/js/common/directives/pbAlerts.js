pbAlerts.$inject = ['alerting'];

export default function pbAlerts(alerting) {
	return {
		restrict: 'EA',
		template: require('../../../templates/alerts.html'),
		scope: {},
		controller: function($scope) {
			$scope.removeAlert = function(alert) {
				alerting.removeAlert(alert);
			};
		},
		link: function(scope, element, attrs) {
			scope.alerts = alerting.currentAlerts;
		}
	};
}