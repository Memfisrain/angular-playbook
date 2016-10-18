Rating.$inject = ['$scope'];

export default function Rating($scope) {
	this.initialize = initialize;

	$scope.click = onClick;
	$scope.styles = styles;

	/////////////////////////
	function initialize(min, max) {
		$scope.stars = new Array(max);
	}

	function onClick($index) {
		$scope.value = $index + 1;
	}

	function styles($index) {
		return {
			'glyphicon': true,
			'glyphicon-star': $index < $scope.value,
			'glyphicon-star-empty': $index >= $scope.value,
		};
	}
};