const values = [0, "", "hello", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});
// [] and {} are truthy — only the 6 falsy values above are falsy

const username = "winston";
const password = "wgultiano123";
 
const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true
 
const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true
 
console.log("" || "hello");        // "default" (first truthy)
console.log(username && "Welcome to the other side!");  // "Welcome!" (both truthy)
console.log(!canLogIn);            // false