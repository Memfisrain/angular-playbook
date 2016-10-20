import 'bootstrap/dist/css/bootstrap.css';
import '../css/animate.css';
import '../css/main.css';

import angular from 'angular';

import configure from './app.config';
import appStart from './app.start';

import core from './common/core.module';
import login from './login/login.module';
import secret from './secret/secret.module';
import dashboard from './dashboard/dashboard.module';
import admin from './admin/admin.module';
import profile from './profile/profile.module';

angular
	.module('app', [
		core,
		/*
		 * Feature areas
		 */
		 login,
		 secret,
		 dashboard,
		 admin,
		 profile
	])
	.config(configure)
	.run(appStart);
