const raw = "  Winston Gultiano  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase()); // "WINSTON"
console.log(clean.includes("Winston")); // true
console.log(clean.slice(8, 16)); // "Gultiano
console.log(`Full name: ${first} ${last}`);

console.log(parseInt("20px"));   // 20
console.log((19.9999).toFixed(2)); // "20.00"
 
const result = "abc" / 2;
console.log(result);          // NaN
console.log(Number.isNaN(result)); // true