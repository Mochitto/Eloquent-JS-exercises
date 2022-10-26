let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
    return array.reduce((before, arr) => before.concat(arr), [])
}

console.log(flatten(arrays))