alerting.$inject = ['$timeout'];

export default function alerting($timeout) {
	let currentAlerts = [];

	return {
		addWarning,
		addDanger,
		addInfo,
		addSuccess,
		addAlert,
		removeAlert,
		currentAlerts,
		errorHandler
	};

	//////////////////
	function addWarning(message) {
		addAlert('warning', message);
	}

	function addDanger(message) {
		addAlert('danger', message);
	}

	function addInfo(message) {
		addAlert('info', message);
	}

	function addSuccess(message) {
		addAlert('success', message);
	}

	function addAlert(type, message) {
		let alert = {type, message};

		currentAlerts.push(alert);

		$timeout(function() {
			removeAlert(alert);
		}, 5000);
	}

	function removeAlert(alert) {
		currentAlerts.some((a, ind) => {
			return a === alert && currentAlerts.splice(ind, 1);
		});
	}

	function errorHandler(description) {
		return () => {
			addDanger(description);
		};
	}
}