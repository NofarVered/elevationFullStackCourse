// ---------- EX1
function isEven(num) {
  return num % 2 == 0;
}
// ---------- EX2
function printOdds(numbers) {
  let output = numbers.filter(isEven);
  console.log(output);
}
// ---------- EX3
function myFunction(arr, num) {
  return arr.includes(num);
}
// ---------- EX4
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};
const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42
