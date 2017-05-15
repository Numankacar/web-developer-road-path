import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'angularfire';

import appConfig from './app.config';

import HomeController from './Home/HomeController';

import servicesModule from './Services';
import itemsModule from './items-module';
import addModule from './add';



angular.module('myApp',
	[
		uirouter, firebase, 'autocomplete', servicesModule, itemsModule, addModule,
	])
	.config(appConfig)
	.controller('HomeController', HomeController);
