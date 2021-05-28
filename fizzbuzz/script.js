// Fizz Buzz Algorithm
for (let i = 1; i <= 100; i++) {
    // Fizz Buzz
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    // Fizz
    else if (i % 3 === 0) console.log("Fizz"); 
    // Buzz
    else if (i % 5 === 0) console.log("Buzz");
    // Number
    else console.log(i);
}