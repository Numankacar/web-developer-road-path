export default class ItemService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    findAll() {

        var deferred = this.$q.defer();

        this.$http.defaults.headers.common['X-Parse-Application-Id'] = 'qKAVFyIVaj1oQ1HJrnt19EG0D3ipJ3RwKRUgYhWH';
        this.$http.defaults.headers.common['X-Parse-REST-API-Key'] = 'inr4fxqIuvbdeOzLx4NC1LjpZ1gzaZCnhk4yENFr';

        this.$http.get('https://api.parse.com/1/classes/Items')

        .success((data, status, headers, config)=> {
            deferred.resolve(data);
        })
        .error((data, status) => {
            deferred.reject(data);
        });


        return deferred.promise;
    }
}

ItemService.$inject = ['$http', '$q'];