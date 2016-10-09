const express = require('express');
const OAuthServer = require('express-oauth-server');
const path = require('path');
const fs = require('fs');
const serve = require('serve-static');

const config = require('./config');

const model = require('./server/model/model');
const middlewaresPath = path.join(__dirname, 'server/middlewares');

let app = express();
let middlewares = fs.readdirSync(middlewaresPath).sort();

let apiRouter = require('./server/api/api.router');

app.oauth = new OAuthServer({
	model
});

// APPLY MIDDLEWARES
middlewares.forEach((middleware) => {
	app.use(require(`${middlewaresPath}/${middleware}`));
});

// SERVE STATIC FILES FROM NODE_MODULES
app.use('/node_modules', serve(__dirname + '/node_modules'));

// ENDPOINT TO RECEIVE ACCESS TOKEN
app.post('/login', app.oauth.token());

/*app.get('/api/secret', verifyAccess, (req, res) => {
	res.send('My today Super RECIPE');
});*/

app.use('/api', apiRouter);


// START SERVER ON PORT 3000
app.listen(3000);
