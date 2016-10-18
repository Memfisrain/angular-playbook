import './rating.styles.css';

import angular from 'angular';

import Rating from './rating.controller';
import pbRating from './rating.directive';

export default angular
	.module('core.rating', [])
	.controller('Rating', Rating)
	.directive('pbRating', pbRating)
	.name;