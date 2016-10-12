import angular from 'angular';
import uirouter from 'angular-ui-router';
import sanitize from 'angular-sanitize';

import currentUser from './services/currentUser.service';
import oauth from './services/oauth.service';
import formEncode from './services/formEncode.service';
import localStorage from './services/localStorage.service';
import alerting from './services/alerting.service';

import addToken from './interceptors/addToken.interceptor';
import loginRedirect from './interceptors/loginRedirect.interceptor';
import requestCounter from './interceptors/requestCounter.interceptor';

import pbAlerts from './directives/pbAlerts.directive';
import pbWorkSpinner from './directives/pbWorkSpinner.directive';

import exceptionHandlerDecorator from './decorators/exceptionHandler.decorator';
import interpolateDecorator from './decorators/interpolate.decorator';

export default angular
	.module('app.core', [uirouter, sanitize])
	.config($provide => {
		$provide.decorator('$exceptionHandler', exceptionHandlerDecorator);
		$provide.decorator('$interpolate', interpolateDecorator);
	})
	.factory('currentUser', currentUser)
	.service('formEncode', formEncode)
	.service('oauth', oauth)
	.service('localStorage', localStorage)
	.factory('alerting', alerting)
	.factory('addToken', addToken)
	.factory('requestCounter', requestCounter)
	.factory('loginRedirect', loginRedirect)
	.directive('pbAlerts', pbAlerts)
	.directive('pbWorkSpinner', pbWorkSpinner)
	.name;
