class Group {
    constructor(elements) {
        this.set = elements
    }

    add(value) {
        if (this.has(value)) return this;
        // Pushing would change the original array, this creates a new one
        else return new Group(this.set.concat([value])) 
    }

    delete(value) {
        if (!this.has(value)) return this;
        // Filter takes care of deleting the unwanted value
        else return new Group(this.set.filter(element => element != value)) 
    }

    has(value) {
        return this.set.includes(value)
    }

    static get empty() {
        return new Group([])
    }
}
