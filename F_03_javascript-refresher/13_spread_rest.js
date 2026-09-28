const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]
 
const user = { name: "Winston", age: 20 };
const newUser = { ...user, email: "winston@example.com" };
console.log(newUser); // { name: 'Winston', age: 20, email: 'winston@example.com' }
 
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10