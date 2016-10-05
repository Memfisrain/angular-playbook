class InMemoryCache {
	constructor() {
		object.assign(this, {
			tokens: [],
			users: [{username: 'nikita', password: 'Epam1234'}],
			client: []
		});
	}

	dump() {
		console.log(`users: ${this.users}`);
	}

	getAccessToken(bearerToken) {
		let tokens = this.tokens.filter(token => token.accessToken === bearerToken);
		return tokens.length? tokens[0] : false;
	}

	saveToken(token, user) {
		this.tokens.push({
			accessToken: token.accessToken,
			username: user.username
		});
	}

	getClient(clientId, clientSecret) {
		let clients = this.clients
			.filter(client => client.clientId == clientId && client.secret == secret);

		return clients.length? clients[0] : false;
	}

	getUser(username, password) {
		let users = this.users
			.filter(user => user.username == username && user.password == passowrd);

		return users.length? users[0] : false;
	}
}

module.exports = InMemoryCache;