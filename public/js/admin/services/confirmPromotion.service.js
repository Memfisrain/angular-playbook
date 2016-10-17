confirmPromotion.$inject = ['$modal'];

export default function confirmPromotion($modal) {
	return function(employee) {
		let options = {
			template: require('../templates/confirmPromotion.html'),
			controller: function() {
				this.employee = employee;
			},
			controllerAs: 'model'
		};

		return $modal.open(options).result;
	};
}