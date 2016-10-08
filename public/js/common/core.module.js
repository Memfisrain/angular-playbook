import angular from 'angular';
import uirouter from 'angular-ui-router';

import currentUser from './currentUser';
import addToken from './interceptors/addToken';
import oauth from './oauth';
import formEncode from './formEncode';

console.log(formEncode);
console.log(oauth);

export default angular
	.module('app.core', [uirouter])
	.factory('currentUser', currentUser)
	.factory('addToken', addToken)
	.service('formEncode', formEncode)
	.service('oauth', oauth)
	.name;
