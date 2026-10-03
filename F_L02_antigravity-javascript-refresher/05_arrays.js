let favoriteFoods = ["Adobo", "Sinigang", "Bicol Express"];
favoriteFoods.push("Ginataan"); //  ["Adobo", "Sinigang", "Bicol Express", "Ginataan"];
favoriteFoods.shift(); // ["Sinigang", "Bicol Express", "Ginataan"];
 
for (const food of favoriteFoods) {
  console.log(food);
}
 
const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);