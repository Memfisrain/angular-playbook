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
	function setProfile(props) {
		Object.assign(profile, props);

		localStorage.setItem(USER_KEY, profile);
	}

	function initProfile() {
		profile = localStorage.getItem(USER_KEY);

		if (!profile || profile.expires < new Date()) {
			profile = {
				username: '',
				email: '',
				website: '',
				rating: '',
				phone: '',
				birthdate: '',
				age: '',
				feelLike: '',
				color: '',
				cuisine: '',
				bio: '',
				status: '',
				terms: '',
				token: '',
				expires: new Date().setMinutes(new Date().getMinutes() + 20),
				get loggedIn() {
					return profile.token;
				}
			};
		}
	}
};