const express = require('express');
const OAuthServer = require('express-oauth-server');
const path = require('path');
const fs = require('fs');
const serve = require('serve-static');

const config = require('./config');

const model = require('./server/model/model');
const middlewaresPath = path.join(__dirname, 'server/middlewares');

const DIVIDER = 'Bearer';

let app = express();
let middlewares = fs.readdirSync(middlewaresPath).sort();

app.oauth = new OAuthServer({
	model
});

middlewares.forEach((middleware) => {
	app.use(require(`${middlewaresPath}/${middleware}`));
});

app.use('/node_modules', serve(__dirname + '/node_modules'));


app.get('/api/secret', verifyAccess, (req, res) => {
	res.send('My today Super RECIPE');
});

app.post('/login', app.oauth.token());

app.listen(3000);



function verifyAccess(req, res, next) {
	let authToken = getAuthToken(req);
	
	if(model.getAccessToken(authToken)) {
		next();
	}

	res.statusCode = 401;
	res.send();
}

function getAuthToken(req) {
	let authentication = req.headers.authentication;

	if(!authentication) {
		return;
	}

	let token = authentication.match(new RegExp(`${DIVIDER} (.+)$`));
	return token? token[1] : null;
}
