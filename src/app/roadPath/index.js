import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './roadPath.config';
import RoadPathController from './roadPath.controller';


export default angular.module('myApp.roadpath', [uirouter])
    .config(config)
    .controller('RoadPathController', RoadPathController)
    .name;
