export default class LimitedStorage {
    limit;
    stack = [];

    constructor(limit) {
        this.limit = limit;
    }

    add(id, data) {
        this.stack = this.stack.filter(item => item.id !== id)
        this.stack.push({id, data})
        this.cleanUp()
    }

    get(id) {
        return (this.stack.filter(item => item.id === id)[0] || {}).data;
    }

    cleanUp() {
        while (this.stack.length > this.limit) {
            this.stack.shift();
        }
    }

    size() {
        return this.stack.length;
    }
}