// function every(array, test) {
//     return array.reduce((before, current) => before && test(current), true)
//   }

// function every(array, test) {
//     return !array.some(n => !test(n)) 
// }

function every(array, test) {
    for (let item of array) {
        if (!test(item)) return false
    }
    return true
}
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true