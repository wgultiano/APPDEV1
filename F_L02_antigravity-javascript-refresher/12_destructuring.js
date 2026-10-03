const person = { name: "Winston", age: 20 };
const { name, age } = person;
console.log(name, age); // "Winston 20"
 
const hobbies = ["watching movies", "listening to music", "self reflection"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // "watching movies listening to music"
 
function printName({ name }) {
  console.log(name);
}

printName(person); // "Winston"