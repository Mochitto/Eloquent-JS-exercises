class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return `Vector object: (${this.x};${this.y}), length: ${this.length}`
    }

    plus(vector) {
        return new Vector((this.x + vector.x), (this.y + vector.y)) 
    } 

    minus(vector) {
        return new Vector((this.x - vector.x), (this.y - vector.y)) 
    }
    
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)).toFixed(2)
    }
}

let myVec = new Vector(3, 4)
let anotherVec = new Vector(1, 2)
console.log(myVec.length)
console.log(myVec.plus(anotherVec).toString())
console.log(myVec.minus(anotherVec).toString())