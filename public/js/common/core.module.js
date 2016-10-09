import angular from 'angular';
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';

import currentUser from './services/currentUser';
import oauth from './services/oauth';
import formEncode from './services/formEncode';
import localStorage from './services/localStorage';

import addToken from './interceptors/addToken';
import loginRedirect from './interceptors/loginRedirect';

export default angular
	.module('app.core', [uirouter, sanitize])
	.factory('currentUser', currentUser)
	.service('formEncode', formEncode)
	.service('oauth', oauth)
	.service('localStorage', localStorage)
	.factory('addToken', addToken)
	.factory('loginRedirect', loginRedirect)
	.name;
