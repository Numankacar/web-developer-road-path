

export default  function configutator($stateProvider, $urlRouterProvider, $locationProvider ) {

    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/items');
}

configutator.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
