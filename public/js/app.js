import angular from 'angular';
import routing from './app.config';

import core from './common/core.module';
import login from './login/login.module';
import secret from './secret/secret.module';

console.log(core);
angular
	.module('app', [
		core,
		/*
		 * Feature areas
		 */
		 login,
		 secret
	])
	.config(routing);
