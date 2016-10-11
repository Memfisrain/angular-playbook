exceptionHandlerDecorator.$inject = ['$delegate', '$injector'];

export default function exceptionHandlerDecorator($delegate, $injector) {
	return (exception, cause) => {
		let alerting = $injector.get('alerting');

		$delegate(exception, cause);
		alerting.addDanger(exception.message);
	};
}