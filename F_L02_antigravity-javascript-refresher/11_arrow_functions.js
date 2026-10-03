const greet = name => "Hello, " + name; // implicit return
const square = n => n * n;              // implicit return
const sayHi = () => "Hi!";              // implicit return

console.log(greet("Winston"));          // Hello, Winston
console.log(square(5));                 // 25
console.log(sayHi());                   // Hi!


const sayHello = () => {                // no return
    console.log("Hi!");
};


const greetAgain = name => {            // explicit return
    return "Hello, " + name;
};

const squareAgain = n => {              // explicit return
    return n * n;
};

const sayHiAgain = () => {              // explicit return
    return "Hi!";
};

console.log(greetAgain("Winston"));     // Hello, Winston
console.log(squareAgain(5));            // 25
console.log(sayHiAgain());              // Hi!