
export default class AddController {
    constructor($firebaseArray) {

        var ref = firebase.database().ref().child('webDeveloperRoadmapTree');
        this.firebaseArray = $firebaseArray;
        this.pathsArray = this.firebaseArray(ref);


        // this.pathsArray.$add(//new path);
    }
}

AddController.$inject = ['$firebaseArray'];
