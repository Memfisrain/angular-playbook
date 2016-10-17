import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.css';

import angular from 'angular';

import configure from './app.config';
import appStart from './app.start';

import core from './common/core.module';
import login from './login/login.module';
import secret from './secret/secret.module';
import dashboard from './dashboard/dashboard.module';
import admin from './admin/admin.module';


angular
	.module('app', [
		core,
		/*
		 * Feature areas
		 */
		 login,
		 secret,
		 dashboard,
		 admin
	])
	.config(configure)
	.run(appStart);
