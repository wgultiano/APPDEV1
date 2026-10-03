const userInfo = { name: "Winston", age: 20 };

function greet() {
  return "Hello from another world!";
}

// Print the user Information and call the function greet
console.log(userInfo);
console.log(greet())

export default greet;
export { userInfo };