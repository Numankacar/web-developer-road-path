export default class Tree {
    constructor($scope) {
        this.templateUrl = '../../components/tree/tree.html';
        /*require*/
        this.restrict = 'E';
        this.scope = {
            model: '='
        };

        this.controller = DirectiveController;
        this.controllerAs = 'vm';
        this.bindToController = true;
    }


    link(scope, element, attrs) {

        scope.$watch('vm.model', function (value) {
            if (!!value && value.length > 0) {
                console.log(value);
            }
        });
    }
}


class DirectiveController {
    constructor() {
    }


}

DirectiveController.$inject = [];
