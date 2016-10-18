Admin.$inject = ['Employee', 'alerting', 'confirmPromotion'];

export default function Admin(Employee, alerting, confirmPromotion) {
	let model = this;

	model.employees = [
		new Employee('Scott', 'Allen', 4),
		new Employee('Alex', 'Lifeson', 2),
		new Employee('Zoey', 'Duck', 5),
		new Employee('Peter', 'Show', 3)
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