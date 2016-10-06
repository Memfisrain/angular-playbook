import angular from 'angular';
import uirouter from 'angular-ui-router';

import Login from './login.controller';
import routing from './login.routes';

export default angular
	.module('app.login', [uirouter])
	.config(routing)
	.controller('Login', Login)
	.name;
