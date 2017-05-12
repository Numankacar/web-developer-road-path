import angular from 'angular';
import uirouter from 'angular-ui-router';


import appConfig from './app.config';

import HomeController from './Home/HomeController';

import servicesModule from './Services';
import itemsModule from './items-module';



angular.module('myApp',
	[
		uirouter, servicesModule, itemsModule
	])
	.config(appConfig)
	.controller('HomeController', HomeController);

