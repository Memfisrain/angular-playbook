const express = require('express');
const OAuthServer = require('express-oauth-server');
const path = require('path');
const fs = require('fs');
const serve = require('serve-static');
const crypto = require('crypto');

const config = require('./config');

const model = require('./server/model/model');
const middlewaresPath = path.join(__dirname, 'server/middlewares');

// save access token for one user
let accessToken = crypto.randomBytes(48).toString('hex');
let isTokenSaved = false;

let app = express();
let middlewares = fs.readdirSync(middlewaresPath).sort();

app.oauth = new OAuthServer({
	model
});

middlewares.forEach((middleware) => {
	app.use(require(`${middlewaresPath}/${middleware}`));
});

app.use('/node_modules', serve(__dirname + '/node_modules'))

app.post('/api/secret', app.oauth.authorize(), (req, res) => {
	console.log(req);
});

app.post('/login', (req, res) => {
	let user = model.getUser(req.body.username, req.body.password);

	if(user) {
		if (!isTokenSaved) {
				model.saveToken({accessToken}, user);
		}
		
		res.send({access_token: accessToken});
	}

	res.statusCode = 401;
	res.send('Unknown user');
});



app.listen(3000);

