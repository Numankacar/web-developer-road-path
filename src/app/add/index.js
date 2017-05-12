import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './add.config';
import AddController from './add.controller';


export default angular.module('myApp.add', [uirouter])
    .config(config)
    .controller('AddController', AddController)
    .name;
