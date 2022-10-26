const countChar = (word, char) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === char) count += 1;
    };
    return count
};

const countBs = number => countChar(number, "B");


console.log(countBs("sdVBSsdBB"));
console.log(countChar("kakkerlak", "k"));