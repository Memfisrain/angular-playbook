Login.$inject = ['$http', 'oauth', 'currentUser'];

export default function Login($http, oauth, currentUser) {
	let vm = this;

	vm.username = 'nikita';
	vm.passowrd = '';
	vm.user = currentUser.profile;

	vm.login = login;


	//////////////////////
	function login(form) {
		if (form.$valid) {
			oauth
				.login(vm.username, vm.password)
				.catch(err => {
					console.error(err);
				});

				vm.username = vm.password = '';
				form.$setUntouched();
		}
	};
}
