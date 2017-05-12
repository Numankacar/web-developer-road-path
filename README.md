
## Angular Ecma 6 Sample Project

Simple Angular Project written with Angular JS 1.x.x by using ECMA script 6. 

## Code Example

Items Controller 
```

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

```

Item Service
```
this.$http.get('https://api.parse.com/1/classes/Items')
  .success((data, status, headers, config)=> {
      deferred.resolve(data);
  })
  .error((data, status) => {
      deferred.reject(data);
  });
```

## Motivation

This project can be used as a starter template of Angular 1.x.x with Ecma Script 6

## Installation

1- npm install -g gulp

2- gulp serve

3- Open browser and hit http://localhost:4242

4- Enter http://parse.com/ Create Account and create Items class with ItemName column

5- Change appId & restApiKey which will be provided by Parse.com, in configuration.services.js 

## Tests

There is no test written by now, but it does not mean that tests will not be implemented in the future

## License

No Copyright

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See Other Information below.
