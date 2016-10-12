currentUser.$inject = ['localStorage'];

export default function currentUser(localStorage) {
	const USER_KEY = 'userok';

	let profile;

	initProfile();

	return {
		profile,
		setProfile
	}

	/////////////////////////////////////////////
	function setProfile(username, token) {
		Object.assign(profile, {username, token});

		localStorage.setItem(USER_KEY, profile);
	}

	function initProfile() {
		profile = localStorage.getItem(USER_KEY);

		if (!profile) {
			profile = {
				username: '',
				token: '',
				get loggedIn() {
					return profile.token;
				}
			};
		}
	}
};