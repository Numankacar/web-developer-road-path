

export default  function configutator($stateProvider, $urlRouterProvider, $locationProvider ) {

    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/roadpath');
}

configutator.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
