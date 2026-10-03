if (true) {
  let insideBlock = "only visible here";
  console.log(insideBlock); // works fine
}
 
try {
  console.log(insideBlock); // ReferenceError
} catch (error) {
  console.log("insideBlock doesn't exist here");
}

function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}
 
const counterA = createCounter();
const counterB = createCounter();
const counterC = createCounter(); // Try adding counterC to see if this works the way I understand it.
 
console.log(counterA()); // 1
console.log(counterB()); // 1
console.log(counterB()); // 2 -- independent of counterA
console.log(counterC()); // 1
console.log(counterC()); // 2
console.log(counterC()); // 3