import angular from 'angular';
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';

import currentUser from './services/currentUser';
import oauth from './services/oauth';
import formEncode from './services/formEncode';
import localStorage from './services/localStorage';
import alerting from './services/alerting';

import addToken from './interceptors/addToken';
import loginRedirect from './interceptors/loginRedirect';

import pbAlerts from './directives/pbAlerts'

import exceptionHandlerDecorator from './decorators/exceptionHandler.decorator';

export default angular
	.module('app.core', [uirouter, sanitize])
	.config($provide => {
		$provide.decorator('$exceptionHandler', exceptionHandlerDecorator);
	})
	.factory('currentUser', currentUser)
	.service('formEncode', formEncode)
	.service('oauth', oauth)
	.service('localStorage', localStorage)
	.factory('alerting', alerting)
	.factory('addToken', addToken)
	.factory('loginRedirect', loginRedirect)
	.directive('pbAlerts', pbAlerts)
	.name;
