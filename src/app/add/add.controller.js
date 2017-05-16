
export default class AddController {
    constructor($scope, $firebaseArray) {

        var self = this;
        var ref = firebase.database().ref().child('webDeveloperRoadmapTree');
        this.firebaseArray = $firebaseArray;
        this.pathsArray = this.firebaseArray(ref);
        this.$scope = $scope;
        this.autoCompleteSuggestions = [];
        this.selectedParentNode = '';
        this.selectedParentNodeId = '';

        this.pathsArray.$loaded().then(function(){
            for (var path of self.pathsArray) {
              self.autoCompleteSuggestions.push(path.name);
            }
       });

       $scope.$watch('vm.selectedParentNode', function(value) {
           if (value && value.length > 0) {
               console.log(value);
               var found = _.find(self.pathsArray, function (o) { return o.name === value; })

               if(found != null){
                   self.selectedParentNodeId = found.$id;
               }
           }
       });

        this.newNode = null;
        this.resetNewNode();

    }

    resetNewNode()
    {
        this.newNode = {
            name:'',
            thumbnailUrl:'',
            description:'',
            whoIsUsed:'',
            releaseDate:'',
            additionalInfo:'',
            parentId: null
        };

        this.selectedParentNode = '';
        this.selectedParentNodeId = '';
    }

    addNode()
    {
        var self = this;

        if(self.newNode != null){
            self.newNode.parentNodeId = self.selectedParentNodeId;
        }

        location.reload();

        self.pathsArray.$add(self.newNode);
        self.resetNewNode();
    }

    onParentNodeSelected(selected){
        this.$parent.vm.selectedParentNode = selected;
    }
}

AddController.$inject = ['$scope', '$firebaseArray'];
