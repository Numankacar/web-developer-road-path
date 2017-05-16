
export default class RoadPathController {
    constructor($scope, $firebaseArray) {

        var self = this;
        var ref = firebase.database().ref().child('webDeveloperRoadmapTree');
        this.firebaseArray = $firebaseArray;
        this.pathsArray = this.firebaseArray(ref);
        this.$scope = $scope;

        this.tree = [];
        this.treeData = [];

        this.pathsArray.$loaded().then(function(){

            for (var path of self.pathsArray) {

                var parent = _.find(self.pathsArray, function (o) { return o.$id === path.parentNodeId; });

                if(!!parent){
                    var child = path;
                    child.text = path.name;
                    child.parent = parent;
                    child.parent.image = self.getImage(parent.name);
                    child.parent.text = parent.name;
                    child.image = self.getImage(path.name);
                    self.tree.push(child);
                }else{
                    var mother = path;
                    mother.text = path.name;
                    mother.image = self.getImage(path.name);
                    self.tree.push(mother);
                }
            }

            self.treeData = self.tree;

            // console.log(self.tree);
        });

    }

    getImage(text){
        return ("https://placeholdit.imgix.net/~text?txtsize=33&txt="+ text + "&w=150&h=150");
    }
}

RoadPathController.$inject = ['$scope', '$firebaseArray'];
