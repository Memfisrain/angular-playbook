import angular from 'angular';

import routes from './profile.routes';
import Profile from './profile.controller';

export default angular
	.module('app.profile', [])
	.config(routes)
	.controller('Profile', Profile)
	.name;