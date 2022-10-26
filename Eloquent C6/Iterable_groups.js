class Group {
    constructor() {
        this.group = Object.create(null)
    }

    add(value) {
        if (!(value in this.group)) this.group[value] = undefined
    }

    delete(value) {
        if (value in this.group) delete this.group[value]
    }

    has(value) {
        return (value in this.group)
    }

    static from(iterable) {
        let set = new Group()
        let iter = iterable[Symbol.iterator]
        if (typeof iter === "function") {
        for (let value of iterable) {
            set.add(value)
        }
        return set
    } else throw new Error("The given object is not iterable.")
    }

    [Symbol.iterator]() {
        return new GroupIterator(this.group)
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group
    }

    next() {
        if (Object.keys(this.group).length == 0) return {done: true}

        let value = Object.keys(this.group).pop()
        delete this.group[value]
        return {value: value, done: false}
    }
}