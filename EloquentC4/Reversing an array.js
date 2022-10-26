function reverseArray(your_array) {
        working_array = new Array(...your_array);
        reverseArrayInPlace(working_array);
        return working_array;
};

function reverseArrayInPlace(your_array) {
    for (let i = -1; -i <= your_array.length; i--) {
        let value = your_array.splice(i, 1);
        your_array.push(value[0]);
    };
};

myArray = [1, 2, 3, 4, 5, 6, 7, 8]
reverseArrayInPlace(myArray)
console.log(myArray)
console.log(reverseArray(myArray))