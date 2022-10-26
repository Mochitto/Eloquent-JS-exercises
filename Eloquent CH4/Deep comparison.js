const deepEqual = (v1, v2) => {
    if ((!v1 || !v2) || (typeof v1 != "object" && typeof v2 != "object")) {
        return v1 === v2
    } else {
        let k1 = Object.keys(v1), k2 = Object.keys(v2)
        for (let keyword of k1) {
            if (!deepEqual(v1[keyword], v2[keyword])) return false
            else return true
        };
        };
    }


console.log(deepEqual(1, 1)) /* true */
console.log(deepEqual("helo", 1)) /* false */
console.log(deepEqual(null, null)) /* true */
console.log(deepEqual({"hello": 1}, null)) /* false */
console.log(deepEqual({"hello": {"ababa" : 2}}, {"hello" : {"ababa" : 2}})) /* true */