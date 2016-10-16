import angular from 'angular';
import uiroter from 'angular-ui-router';

import Dashboard from './dashboard.controller';
import Costs from './costs/costs.controller';
import Injuries from './injuries/injuries.controller';
import Customers from './customers/customers.controller';
import Overall from './overall/overall.controller';

import routing from './dashboard.routes';

export default angular
	.module('app.dashboard', [uiroter])
	.config(routing)
	.controller('Dashboard', Dashboard)
	.controller('Overall', Overall)
	.controller('Customers', Customers)
	.controller('Injuries', Injuries)
	.controller('Costs', Costs)
	.name;