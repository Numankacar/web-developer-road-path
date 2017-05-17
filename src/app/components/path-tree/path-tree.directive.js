export default class PathTreeDirective {
    constructor() {
        this.template = '<div style="width:100%; font-size:30px; height:30px; margin-top:10px; text-align:center;" id="loadingMessage"></div><div id="treeContainer"></div>';
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
				console.log(scope);
                console.log(value);
                var treeDataArray = [];
                $(document).ready(function(){
                    var treeConfig = {
                        container: "#treeContainer",
						callback : {
							onTreeLoaded : function(){
								$('#loadingMessage').text('');
							}
						},
                        hideRootNode :false,
                        node: {
                            collapsable: true
                        }
                    };

                    treeDataArray.push(treeConfig);
                    treeDataArray = treeDataArray.concat(value);
					
					$('#loadingMessage').text('tree will be initialized soon');
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
