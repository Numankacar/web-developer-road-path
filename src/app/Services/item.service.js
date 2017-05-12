export default class ItemService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    findAll() {        


    }
}

ItemService.$inject = ['$http', '$q'];
