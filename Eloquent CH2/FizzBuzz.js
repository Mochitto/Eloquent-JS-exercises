function FizzBuzz(game_range){
    for (let n = 1, output; n <= game_range; n++) {
        output = "";  
        if (n % 3 === 0) output = "Fizz";
        if (n % 5 === 0) output += "Buzz";
        console.log(output || n);
      }
};

FizzBuzz(100)