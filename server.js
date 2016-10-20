const express = require('express');
const OAuthServer = require('./server/express-oauth');
const path = require('path');
const fs = require('fs');
const serve = require('serve-static');

const config = require('./config');

const model = require('./server/model/model');
const middlewaresPath = path.join(__dirname, 'server/middlewares');

let app = express();
let middlewares = fs.readdirSync(middlewaresPath).sort();

let secretServiceMiddleware = require('./server/api/secret-recipe');
let nameValidationMiddleware = require('./server/api/name-validation');

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

// API authenticate middleware
app.use('/api', app.oauth.authenticate());
app.get('/api/secret', secretServiceMiddleware);
app.get('/api/namevalidation', nameValidationMiddleware);

// START SERVER ON PORT 3000
app.listen(3000);
