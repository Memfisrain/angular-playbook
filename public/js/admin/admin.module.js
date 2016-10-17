import './css/admin.css';

import routes from './admin.routes';

import employee from './services/employee.service';
import confirmPromotion from './services/confirmPromotion.service';

import Admin from './admin.controller';

export default angular
	.module('app.admin', [])
	.config(routes)
	.factory('Employee', employee)
	.service('confirmPromotion', confirmPromotion)
	.controller('Admin', Admin)
	.name;