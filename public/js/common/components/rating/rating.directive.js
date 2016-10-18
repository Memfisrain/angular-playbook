export default pbRating() {
	return {
		scope: {
			value: '='
		},
		require('Rating'),
		template: require('../../../templates/pbRating.html'),
		controller: 'Rating',
		link: function(scope, element, attrs, controller) {
			let min = attrs.min;
			let max = attrs.max;

			controller.initialize(min, max);
		}
	}
}