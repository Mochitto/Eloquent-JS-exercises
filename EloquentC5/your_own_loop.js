// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function loop(number, test, update, action) {
    while (test(number)) {
        action(number)
        number = update(number)
    }
}
