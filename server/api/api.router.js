
const router = require('express').Router();
const secretRecipeMiddleware = require('./secret-recipe');
const model = require('../model/model');

// DIVIDER WILL BE USED IN AUTHENTICATION HEADER AS FIRST WORD
const DIVIDER = 'Bearer';

router.use(verifyAccess);

router.get('/secret', secretRecipeMiddleware);


// THIS MIDDLEWARE IS USED FOR ALL /api REQUESTS
// IN ORDER TO VERIFY AUTHORIZATION HEADER
function verifyAccess(req, res, next) {
	let authToken = getAuthToken(req);
	
	if(model.getAccessToken(authToken)) {
		next();
	}

	res.statusCode = 401;
	res.send();
}

// HELPER FUNCTION
function getAuthToken(req) {
	let authentication = req.headers.authentication;

	if(!authentication) {
		return;
	}

	let token = authentication.match(new RegExp(`${DIVIDER} (.+)$`));
	return token? token[1] : null;
}

module.exports = router;