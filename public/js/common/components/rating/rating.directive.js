export default function pbRating() {
	return {
		scope: {
			value: '='
		},
		template: require('./rating.html'),
		controller: 'Rating',
		link: function(scope, element, attrs, ctrl) {
			let min = parseInt(attrs.min);
			let max = parseInt(attrs.max);

			ctrl.initialize(min, max);
		}
	};
}