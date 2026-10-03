const students = [
  { name: "Ton", grade: 1.75 },
  { name: "Zen", grade: 1.25 },
  { name: "Rom", grade: 2.50 },
];
 
const passing = students.filter(s => s.grade <= 2.00);
console.log(passing.map(s => s.name)); // ["Ton", "Zen"]
 
const rom = students.find(s => s.name === "Rom");
console.log(rom); // { name: "Rom", grade: 2.5 }
 
console.log(students.some(s => s.grade < 2.00)); // true
console.log(students.every(s => s.grade >= 2.50)); // false
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // ["Ton", "Zen", "Rom"]