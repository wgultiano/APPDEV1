let name = "Winston";
let age = 20;
let isStudent = true;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);

let a = 10, b = 5;
console.log("Add:", a + b);
console.log("Divide:", a / b);

console.log("5" == 5);   // true
console.log("5" === 5);  // false

// Testing if working, and it does
console.log("5" == "5"); // true
console.log(5 === "5"); // false

// Loose equality (performs type coercion: true becomes 1)                                                              
console.log(true == 5);  // Output: false                                                                               

// Strict equality (different types: boolean vs number, no coercion)                                                    
console.log(false === 5); // Output: false