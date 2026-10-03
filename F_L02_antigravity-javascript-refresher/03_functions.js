function greet(name) {
  return "Hello, " + name + "!";
}

const square = (num) => {
  return num * num;
};

function divide(a, b) {
  return a / b;
}

const total = divide(10, 3);

console.log(total.toFixed(2));
console.log(greet("Winston"));
console.log(square(4));