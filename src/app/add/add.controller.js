
export default class AddController {
    constructor($firebaseArray) {

        var ref = firebase.database().ref().child('webDeveloperRoadmapTree');
        this.firebaseArray = $firebaseArray;
        this.pathsArray = this.firebaseArray(ref);

        this.newNode = null;
        this.resetNewNode();

        // this.pathsArray.$add(//new path);
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
    }

    addNode()
    {
        this.pathsArray.$add(this.newNode);
        this.resetNewNode();
    }
}

AddController.$inject = ['$firebaseArray'];
