import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'angularfire';

import appConfig from './app.config';

import HomeController from './Home/HomeController';

import servicesModule from './Services';
import roadpath from './roadPath';
import addModule from './add';



angular.module('myApp',
	[
		uirouter, firebase, 'autocomplete', servicesModule,  addModule,
		roadpath,
	])
	.config(appConfig)
	.controller('HomeController', HomeController);
