export default function pbForminput() {
	function setupClasses(element) {
		let input = element.querySelector(
			`input:not([type="checkbox"]):not([type="radio"]), 
			 textarea, 
			 select, 
			 pb-rating`);

		let label = element.querySelector('label');

		input && input.classList.add('form-control');
		label && label.classList.add('control-label');

		element.classList.add('form-group');
	}

	return {
		restrict: 'A',
		link: function(scope, element) {
			setupClasses(element[0]);
		}
	};
}