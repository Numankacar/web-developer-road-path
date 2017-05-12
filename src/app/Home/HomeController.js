import angular from 'angular';

export default class HomeController {
	constructor($scope, $location) {
		$scope.message = 'World';
	}
}

HomeController.$inject = ['$scope', '$location'];