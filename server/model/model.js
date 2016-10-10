let model = {
	tokens: [],
	users: [{username: 'nikita', password: 'Epam1234'}],
	clients: [{
	 	clientId : 'thom', 
	 	clientSecret : 'nightworld', 
		redirectUris : [''], 
		grants: ['password', 'authorization_code']
	}]
};


module.exports.getAccessToken = function getAccessToken(bearerToken) {
	let tokens = model.tokens.filter(token => token.accessToken === bearerToken);
	return tokens.length? tokens[0] : false;
};

module.exports.saveToken = function saveToken(token, client, user) {
	model.tokens.push({
		accessToken: token.accessToken,
		user
	});

	return Object.assign(token, {user, client});
};

module.exports.getClient = function getClient(clientId) {
	let clients = model.clients
		.filter(client => client.clientId == clientId);

	return clients.length? clients[0] : false;
};

module.exports.getUser = function getUser(username, password) {
	let users = model.users
		.filter(user => user.username == username && user.password == password);

	return users.length? users[0] : false;
};

module.exports.saveAuthorizationCode = function saveAuthorizationCode(code, client, user) {
	return code;
};