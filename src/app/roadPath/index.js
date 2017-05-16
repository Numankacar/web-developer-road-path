import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './roadPath.config';
import RoadPathController from './roadPath.controller';
import PathTreeDirective from '../components/path-tree/path-tree.directive';

export default angular.module('myApp.roadpath', [uirouter])
    .config(config)
    .controller('RoadPathController', RoadPathController)
    .directive('pathTree', () => new PathTreeDirective())
    .name;
