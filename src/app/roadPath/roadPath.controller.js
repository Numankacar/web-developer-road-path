
export default class RoadPathController {
    constructor($scope, $firebaseArray) {

        var self = this;
        var ref = firebase.database().ref().child('webDeveloperRoadmapTree');
        this.firebaseArray = $firebaseArray;
        this.pathsArray = this.firebaseArray(ref);
        this.$scope = $scope;
		this.loadingMessage = "loading...";
        this.tree = [];
        this.treeData = [];

        this.pathsArray.$loaded().then(function(){

            for (var path of self.pathsArray) {

                var parent = _.find(self.pathsArray, function (o) { return o.$id === path.parentNodeId; });

                if(!!parent){
                    var child = path;
                    child.text =  {
                        name:path.description,
                        title:path.whoIsUsed
                    };

                    child.parent = parent;
                    child.collapsed = true;
                    child.parent.image = self.getImage(parent.name);
                    child.parent.text = {
                        name:parent.description,
                        title:parent.whoIsUsed
                    };
                    child.parent.collapsed = true;
                    child.image = self.getImage(path.name);
                    self.tree.push(child);
                }else{
                    var mother = path;
                    mother.text = {
                        name:path.description,
                        title:path.whoIsUsed
                    }
                    mother.collapsed = true;
                    mother.image = self.getImage(path.name);
                    self.tree.push(mother);
                }
            }
			self.loadingMessage = "";
            self.treeData = self.tree;
        });

    }

    getImage(text){
        return ("https://placeholdit.imgix.net/~text?txtsize=20&txt="+ text + "&w=150&h=150&bg=ffff00&txtcolor=000");
    }
}

RoadPathController.$inject = ['$scope', '$firebaseArray'];
