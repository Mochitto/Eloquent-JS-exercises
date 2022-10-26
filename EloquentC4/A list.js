function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }

function prepend(element, list) {
    return {value: element, rest: list}
};

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  


console.log(arrayToList([1,2,3,4,5,6]))
console.log(listToArray(arrayToList([1,2,3, 4, 5, 6])))
console.log(prepend("ciao", arrayToList([1,2,3])))
console.log(nth(arrayToList([10, 20, 30]), 1))