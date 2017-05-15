import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './items.config';
import ItemsController from './items.controller';
import ItemService from '../Services/item.service';


export default angular.module('myApp.items', [uirouter])
    .config(config)
    .controller('ItemsController', ItemsController)
    .service('itemService', ItemService)
    .name;
