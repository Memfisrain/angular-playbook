Rating.$inject = ['$scope'];

export default function Rating($scope) {
	this.initialize = initialize;

	$scope.click = onClick;
	$scope.styles = styles;
	$scope.mouseover = mouseover;
	$scope.mouseout = mouseout;

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
			'starpreview': $index <= $scope.preview
		};
	}

	function mouseover($index) {
		$scope.preview = $index;
	}

	function mouseout($index) {
		$scope.preview = -1;
	}
};