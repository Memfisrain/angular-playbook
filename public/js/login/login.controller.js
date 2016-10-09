Login.$inject = ['$http', 'oauth', 'currentUser', 'loginRedirect'];

export default function Login($http, oauth, currentUser, loginRedirect) {
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
				.then(res => {
					loginRedirect.redirectLastPath();
				})
				.catch(err => {
					console.info(err);
				});

				vm.username = vm.password = '';
				form.$setUntouched();
		}
	};
}
