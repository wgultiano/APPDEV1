const name = 'Max';
let age = 29;
const hasHobbies = true;

// Modern ES6 arrow function with template literal                                                                                       
const summarizeUser = (userName, userAge, userHasHobby) => {
    return `Name is ${userName}, age is ${userAge}, and the user has hobbies: ${userHasHobby}`;
};

console.log(summarizeUser(name, age, hasHobbies));  