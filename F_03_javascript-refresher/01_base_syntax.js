console.log("Hello, What's your name?");
 
let myName = "Winston";
let myname = "Orosco";
let myNAME = "Gultiano" // Testing if different capitalization works
 
console.log(myName); // Winston
console.log(myname); // Orosco
console.log(myNAME); // Gultiano

// Valid -- follows every rule
let age = 20;
let _temp = "cache";
let $price = 19.99;
let userName = "winston"; // camelCase convention
 
// Invalid -- each one breaks a rule (all throw a SyntaxError)
// let 2cool = true;   -- can't start with a digit
// let my-name = "John"; -- hyphens aren't allowed in a name
// let let = 5;        -- "let" is a reserved word
 
console.log(age, _temp, $price, userName);
