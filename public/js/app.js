import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import angular from 'angular';
import configure from './app.config';

import core from './common/core.module';
import login from './login/login.module';
import secret from './secret/secret.module';

angular
	.module('app', [
		core,
		/*
		 * Feature areas
		 */
		 login,
		 secret
	])
	.config(configure);
