pbForminput.$inject = ['$compile'];

export default function pbForminput($compile) {

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

		return input.name;
	}

	function addMessages(form, elem, name, scope) {
		let messages = `
			<div class="help-block" ng-messages="${form.$name}.${name}.$error">
				<div ng-messages-include="templates/messages.html"></div>
			</div>`;

		elem.append($compile(messages)(scope));
	}

	return {
		restrict: 'A',
		require: '^^form',
		link: function(scope, element, attrs, form) {
			let name = setupClasses(element[0]);
			addMessages(form, element, name, scope);
		}
	};
};