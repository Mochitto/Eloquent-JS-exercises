class Group {
    constructor(elements) {
        this.set = elements
    }

    add(value) {
        if (this.has(value)) return this;
        else return new Group(this.set.concat([value])) // Pushing would change the original array, this creates a new one
    }

    delete(value) {
        if (!this.has(value)) return this;
        else return new Group(this.set.filter(element => element != value)) // Filter takes care of deleting the unwanted value
    }

    has(value) {
        return this.set.includes(value)
    }

    static get empty() {
        return new Group([])
    }
}
