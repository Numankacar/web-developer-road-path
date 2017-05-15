

export default function config($stateProvider) {
    $stateProvider.state('roadPath', {
        url: '/roadpath',
        views: {
            'main': {
                controller: 'RoadPathController',
                templateUrl: 'app/roadPath/roadPath.html',
                controllerAs: 'vm'
            }
        }
    });
}

config.$inject = ['$stateProvider'];
