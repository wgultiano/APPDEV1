function greet(name) {
  return "Hello, " + name + "!";
}
 
const square = (num) => {
  return num * num;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b, difference: a - b, quotient: a / b};
}

console.log(greet("Winston"));
console.log(square(4));
console.log(calculator(10, 5));