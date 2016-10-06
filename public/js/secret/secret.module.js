import angular from 'angular';
import uirouter from 'angular-ui-router';

import Secret from './secret.controller';
import routing from './secret.routes';

export default angular
	.module('app.secret', [uirouter])
	.config(routing)
	.controller(Secret)
	.name;
