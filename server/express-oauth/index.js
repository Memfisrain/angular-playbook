const InvalidArgumentError = require('oauth2-server/lib/errors/invalid-argument-error');
const NodeOAuthServer = require('oauth2-server');
const Promise = require('bluebird');
const Request = require('oauth2-server').Request;
const Response = require('oauth2-server').Response;
const UnauthorizedRequestError = require('oauth2-server/lib/errors/unauthorized-request-error');

class ExpressOAuthServer extends NodeOAuthServer {
	/*
	 * Constructor
	 */

	constructor(options) {
		super(options);
	}

	/*
	 * Authentication middleware
	 * return wrapper around NodeOAuthServer's token method
	*/

	authenticate(options) {
		let superAuthenticate = super.authenticate.bind(this);

		return (req, res, next) => {
			let request = new Request(req);
			let response = new Response(res);

			return Promise
				.resolve()
				.then(() => superAuthenticate(request, response, options))
				.tap(token => {
					res.locals.oauth = {token};
				})
				.catch(err => handleError(err, req, res))
				.finally(next);
		}
	}

	/*
	 * Authorization middleware
	 * return wrapper around NodeOAuthServer's authorize method
	*/

	authorize(options) {
		let superAuthorize = super.authorize.bind(this);

		return (req, res, next) => {
			let request = new Request(req);
			let response = new Response(res);

			return Promise
				.resolve()
				.then(() => superAuthorize(request, response, options))
				.tap(code => {
					res.locals.oauth = {code};
				})
				.then(() => handleResponse(req, res, response))
				.catch(err => handleError(err, req, res, response))
				.finally(next);
			};
	}

	/*
	 * Token middleware
	 * return wrapper around NodeOAuthServer's token method
	*/

	token(options) {
		let superToken = super.token.bind(this);

		return (req, res, next) => {
			let request = new Request(req);
			let response = new Response(res);

			return Promise
				.resolve()
				.then(() => superToken(request, response, options))
				.tap(token => {
					console.log(token);
					res.locals.oauth = {token};
				})
				.then(() => handleResponse(req, res, response))
				.catch(err => handleError(err, req, res, response))
				.finally(next);
		};
	}
}

let handleResponse = function(req, res, response) {
  res.set(response.headers);
  res.status(response.status).send(response.body);
};

let handleError = function(e, req, res, response) {
  console.error(e.message);

  if (response) {
    res.set(response.headers);
  }

  if (e instanceof UnauthorizedRequestError) {
  	res.status(e.code);
  	return;
  }

  res.status(e.code).send({ error: e.name, error_description: e.message });
};

/*
 * Export our wrapper ExpresOauthClassclass;
 */

module.exports = ExpressOAuthServer;