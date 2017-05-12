

export default function config($stateProvider) {
    $stateProvider.state('add', {
        url: '/add',
        views: {
            'main': {
                controller: 'AddController',
                templateUrl: 'app/add/add.html',
                controllerAs: 'vm'
            }
        }
    });
}

config.$inject = ['$stateProvider'];
