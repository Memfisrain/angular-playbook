function currentUser() {
	let profile = {
		username: '',
		token: '',
		get loggedIn() {
			return profile.token;
		}
	}

	function setProfile(username, token) {
		Object.assign(profile, {username, token});
	}

	return {
		profile,
		setProfile
	}
}

export default currentUser;