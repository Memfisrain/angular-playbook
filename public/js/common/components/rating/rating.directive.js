export default function pbRating() {
	return {
		scope: {
			value: '='
		},
		template: require('./rating.html'),
		controller: 'Rating',
		link: function(scope, element, attrs, ctrl) {
			let min = parseInt(attrs.min) || 1;
			let max = parseInt(attrs.max) || 5;

			ctrl.initialize(min, max);
		}
	};
}