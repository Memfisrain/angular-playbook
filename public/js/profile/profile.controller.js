Profile.$inject = ['currentUser', '$location'];

export default function Profile(currentUser, $location) {
	this.user = currentUser.profile;

	this.submit = submit;

	function submit() {
		//$location.path('/results');
	}
};