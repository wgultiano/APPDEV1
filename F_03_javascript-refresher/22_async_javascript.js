function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Winston", age: 20 });
  }, 1000);
}
 
fetchUserMock((user) => {
  console.log("User Information:", user);
});

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "John Wick", age: 52 }), 2000);
  });
}
 
async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Excommunicado:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}
 
showUser();


// Example of callback with promise
function getTodo(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      callback(null, data)
    })
    .catch(error => {
      callback(error, null)
    });
}

function handleTodo(error, data) {
  if (error) {
    console.error("Error fetching todo:", error);
  } else {
    console.log("Fetched todo:", data);
  }
}

getTodo(handleTodo);

// Example of promise function
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
}

getTodo()
    .then(todo => console.log("Todo: ", todo))
    .catch(error => console.error("Error: ", error))


// Example of async/await function with promise
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();

  return data;
}

async function fetchTodo() {
  try {
    const todo = await getTodo();
    console.log("Todo: ", todo);
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}

fetchTodo();

// synchronous vs asynchronous
let name = "Winston";
let age = 20;
let address = "Sampaloc, Apalit";

setTimeout(() => {
  console.log("This message will be drop after 2 seconds.");
}, 2000);

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);