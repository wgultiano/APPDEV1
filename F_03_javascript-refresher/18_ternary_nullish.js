const grade = 1.75;
const result = grade <= 2.25 ? "Pass" : "Fail";
console.log(result, "with a grade of", grade); // "Pass"
 
const num = 8;
console.log("The number", num, "is", num % 2 === 0 ? "Even" : "Odd"); // "Even"

const user = { name: "Winston" }; // no address property
 
console.log(user.address?.city); // undefined, no crash
 
const age = 0;
console.log(age || 20); // 18 -- wrong! 0 is falsy, so || overrides it
console.log(age ?? 20); // 0  -- right, ?? only replaces null/undefined