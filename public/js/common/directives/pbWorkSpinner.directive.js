import '../../../css/pbWorkSpinner.css'

workSpinner.$inject = ['requestCounter'];

export default function workSpinner(requestCounter) {
	return {
		restrict: 'EA',
		transclude: true,
		scope: {},
		template: '<ng-transclude ng-show="requestCount"></ng-transclude>',
		link: function(scope, element, attrs) {
			scope.$watch(() => requestCounter.getRequestCount(), requests => {
				scope.requestCount = requests;
			});
		}
	};
}