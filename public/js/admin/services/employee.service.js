export default function employee() {
	return class Employee {
		constructor(firstName, lastName, rating) {
			Object.assign(this, {firstName, lastName, rating});
		}
		
		fullName() {
			return `${this.firstName} ${this.lastName}`;
		};
	};
};