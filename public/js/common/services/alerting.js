import angular from 'angular';

export default function alerting() {
	let currentAlerts = [];

	return {
		addWarning,
		addDanger,
		addInfo,
		addSuccess,
		addAlert,
		currentAlerts
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
		currentAlerts.push({type, message});
	}
}