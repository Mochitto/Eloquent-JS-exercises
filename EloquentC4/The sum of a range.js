const range = (start, end, step = start < end ? 1 : -1) => {
    let final_array = new Array();
    let numbers_range = Math.abs(end - start);

    if (start > end) [start, end] = [end, start];
    if (step < 0) start = end

    for (let i = 0; Math.abs(i) <= numbers_range; i+= step) {
        final_array.push(start+i);
    };

    return final_array;
};

const sum = ([...numbers]) => {
    let total = 0;

    for (let number of numbers) {
        total += number;
    };

    return total;
};

console.log(sum(range(1, 10, -1)))
console.log(range(5, 2))