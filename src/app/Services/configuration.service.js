export default class ConfigurationService {
    constructor() {
        this._config = {
            appId: 'qKAVFyIVaj1oQ1HJrnt19EG0D3ipJ3RwKRUgYhWH',
            restApiKey: 'inr4fxqIuvbdeOzLx4NC1LjpZ1gzaZCnhk4yENFr'
        };
    }

    get config() {
        return this._config;
    }
}

ConfigurationService.$inject = [];



