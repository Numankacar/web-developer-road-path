import angular from 'angular';

import ItemService from './item.service';

export default angular.module('myApp.services', [])
    .service('itemService', ItemService)
    .name;
