/*global todomvc, angular, Firebase */
'use strict';


carOffersApp.controller('MainController', function TodoCtrl($scope, $location, $firebaseArray, NgTableParams, ngDialog) {

    var url = 'https://caroffers-2d1be.firebaseio.com/offers';
	var fireRef = new Firebase(url);

	// Bind the todos to the firebase provider.
	$scope.offers = $firebaseArray(fireRef);
    $scope.loading = true;
    $scope.orderCount = 0;
    $scope.newOffer = {
        brand:"",
        model:"",
        package:"",
        modelYear:"",
        optinals:"",
        additional:"",
        city:"",
        dealer:"",
        price:"",
        transmission: false,
        sunroof: false,
        panoramic: false,
        zeroInterest: false
    };

    var offersDataSet = [];

    $scope.offers.$loaded().then(function(){
        angular.forEach($scope.offers, function(offer) {
            offersDataSet.push(offer);
        })

        $scope.orderCount = offersDataSet.length;

        var initialParams = {
                count: 50 // initial page size
        };
        $scope.tableParam = new NgTableParams(initialParams, {dataset: offersDataSet});
        $scope.loading = false;

    });




	$scope.newTodo = '';
	$scope.editedTodo = null;

    $scope.openDetails = function(offer){
        ngDialog.open({
            template: 'offerDetail',
            controller: ['$scope', function($scope) {
                $scope.offerForDetails = offer;
            }]
        });
    }

    $scope.addOffer = function(form, isInvalid){
        form.$submitted = true;

        if(!isInvalid){
            $scope.offers.$add($scope.newOffer);
            location.reload();
        }
    }



	if ($location.path() === '') {
		$location.path('/');
	}
	$scope.location = $location;
});
