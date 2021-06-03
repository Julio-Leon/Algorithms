const largestNumber = num => num > 0? Number("9".repeat(num)): num === 0 ? 0 : Number(`0.${"9".repeat(Math.abs(num))}`);
// console.log(largestNumber(-9));
// console.log(largestNumber(0));
// console.log(largestNumber(5));