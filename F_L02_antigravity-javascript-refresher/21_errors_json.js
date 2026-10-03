function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
 
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}

const user = { name: "Winston", age: 20, isStudent: true };
 
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Winston","age":20,...}'
 
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Winston"
console.log(typeof jsonString, typeof parsedUser); // string object