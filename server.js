const express = require('express');
const OAuthServer = require('express-oauth-server');
const path = require('path');
const fs = require('fs');

const config = require('./config');

const model = require('./server/model/model');
const middlewaresPath = path.join(__dirname, 'server/middlewares');

let app = express();
let middlewares = fs.readdirSync(middlewaresPath).sort();

app.oauth = new OAuthServer({
	model
});

middlewares.forEach((middleware) => {
	app.use(require(`${middlewaresPath}/${middleware}`));
});

app.use(app.oauth.authorize());

app.post('/api/secret', (req, res) => {
	console.log(req);
});

app.post('/login', (req, res) => {
	console.log(req);
});

app.get('*', (req, res) => {
	//res.send(path.join(__dirname, config.root, 'index.html'));
})

app.listen(3000);

