import angular from 'angular';

interpolateDecorator.$inject = ['$delegate', '$log'];

export default function interpolateDecorator($delegate, $log) {
	function serviceWrapper() {
		let bindingFunction = $delegate.apply(this, arguments);

		if (angular.isFunction(bindingFunction) && arguments[0]) {
			return bindingWrapper(bindingFunction, arguments[0]);
		}

		return bindingFunction;
	}

	function bindingWrapper(bindingFunction, bindingExpression) {
		return function() {
			let result = bindingFunction.apply(this, arguments);
			let trimmedResult = result.trim();

			let log = trimmedResult? $log.info : $log.warn;
			log.call($log, `${bindingExpression.trim()} = ${trimmedResult}`);

			return result;
		};
	}

	angular.extend(serviceWrapper, $delegate);

	return serviceWrapper;
}