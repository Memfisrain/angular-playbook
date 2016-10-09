localStorage.$inject = ['$window'];

export default function localStorage($window) {
	let store = $window.localStorage;

	return {
		getItem,
		setItem,
		removeItem,
		clear
	};


	function getItem(name) {
		let value = store.getItem(name);

		if (value) {
			value = angular.fromJson(value)
		}

		return value;
	}

	function setItem(name, value) {
		value = angular.toJson(value);

		store.setItem(name, value);
	}

	function removeItem(name) {
		store.removeItem(name);
	}

	function clear(name, value) {
		store.clear();
	}
}