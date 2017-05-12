
export default class ItemsController {
    constructor(itemService) {
        this.itemService = itemService;
        this.items = null;
        this.loadItems();
    }

    loadItems() {
        return this.itemService.findAll().then((response)=> {
            this.items = response.results;
        });
    }
}

ItemsController.$inject = ['itemService'];
