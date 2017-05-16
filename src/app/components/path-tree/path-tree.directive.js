export default class PathTreeDirective {
    constructor() {
        this.template = '<div id="treeContainer"></div>';
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
                var treeDataArray = [];
                $(document).ready(function(){
                    var treeConfig = {
                        container: "#treeContainer",
                        hideRootNode :false,
                        node: {
                            collapsable: true
                        }
                    };

                    treeDataArray.push(treeConfig);
                    treeDataArray = treeDataArray.concat(value);
                    var tree = new Treant(treeDataArray);

                });

            }
        });
    }
}

class DirectiveController {
    constructor($scope) {
    }
}

DirectiveController.$inject = ['$scope'];
