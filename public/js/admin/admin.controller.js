Admin.$inject = ['Employee', 'alerting', 'confirmPromotion'];

export default function Admin(Employee, alerting, confirmPromotion) {
	let model = this;

	model.employees = [
		new Employee('Scott', 'Allen'),
		new Employee('Alex', 'Lifeson'),
		new Employee('Zoey', 'Duck'),
		new Employee('Peter', 'Show')
	];

	model.promote = promote;

	//////////////////////////

	function promote(employee) {
		confirmPromotion(employee)
			.then(removeEmployee);
	}

	function removeEmployee(employee) {
		model.employees
			.some( (emp, i, arr) => emp === employee && arr.splice(i, 1));
	}
}