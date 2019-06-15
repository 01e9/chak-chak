export default class LimitedStorage<Data = any, ID = string> {
    limit: number;
    stack: Array<{id: ID, data: Data}> = [];

    constructor(limit: number) {
        this.limit = limit;
    }

    add(id: ID, data: Data) {
        this.stack = this.stack.filter(item => item.id !== id)
        this.stack.push({id, data})
        this.cleanUp()
    }

    get(id: ID) {
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
