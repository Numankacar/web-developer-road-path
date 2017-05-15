
export default class AddController {
    constructor($firebaseArray) {
        this.databaseUrl = 'https://webdeveloperroadmap.firebaseio.com/offers';
        this.fireRef = new Firebase(this.databaseUrl);
        this.$firebaseArray = $firebaseArray;

        // this.offers = this.$firebaseArray(this.fireRef);

        // this.offers.$add({name:'eren', surname:'yener'});
        // this.message = "hello world";
    }
}

AddController.$inject = ['$firebaseArray'];
