### 01_base_syntax.js
**Prompt:** 
Using the file named: @01_base_syntax.js access it and modify to make some changes and its up to you what changes you want to apply. As long as, it is related to what the file is content. After that, explain what changes you have done, and run it using node.

**Reflection:**
Base sa binigay nyang result, nalaman ko na kapag pala mag de-declare ng const ay dapat yung value na hindi nagbabago, at kung let naman ay yung value na pwedeng magbago at ma re-assign. Also natutunan ko din na pwede rin palang gumamit ng template literals sa pag print ng value.


### 02_variables.js
In this part, I learned the different types of values, such as string, number, and boolean. I also learned about arithmetic operations using the given examples, such as addition and division. Additionaly, in this part, I compare values using == and === to see both type and value. To test my understanding, I added two lines: console.log("5" == "5"); which is true because they have the same value or they both strings. Lastly, console.log(5 === "5"); which is false because it checks both values and data types.

### 03_functions.js
In this part, I learned different functions, such as greet(), square(), and calculator(). They also used return to give value or result back from the function. For the greet function, I just add my name, and for square function leave it default because its just multiply the value to itself. And for the calculator function, I added the difference and quotient to see also the different calculations because it is calculator functions hehe. 

### 04_objects.js 
What I learned in this part is the object with different properties such as name, age, and cousrse. I also learned how to add another property, which is hobby, and how to use this to access the properties inside the object. 

### 05_arrays.js
In this part, I learned how to create and modify an array using my favoriteFoods. I also learned that push() can add a new value at the end of an array, while shift() removes the first value. Also, learned the for loop to access each food in the array and print it. Lastly, I learned that the map() create a new array by adding "I like" to each food.

### 06_control_structures.js
In this part, I learned about how if, else if, and else are used to check different conditions. Just like in the example, it declare score and check if score is equivalent to an A, B, or C. Also, learned how while loop repeats count. 

### 07_dom.html
What I learned in this part is how to interact html elements using javascript. Also, learned how to get element using getElementById() and use addEventListener() to make the button interact when its clicked. Addtionaly, learned, the prompt(), it gets an input from the user and setTimeout() to change the message after the given or set time. 

### 08_essential_features.js
In this part, I learned difffrent features such as map() to transform an array, descructuring to get the name and age directly from the student object. Lastly, learned how to use spread operator to copy the values from an array and add new values from it. 

### 09_tricky_parts.js
In this part, I learned difference between == and ===, as well as undefined and null. Also, learned the difference between regular function and arrow function. 

### 10_let_const.js 
This is the interesting part I learned, because I explore to used the let instead of const because I think age is not a constant and can be change later hehe. Also, learned that var can also works but as comments said avoid it.

### 11_arrow_functions.js
What I learned in this part is the different between implicit and explicit return. To apply my understanding, I compare implicit and explicit and saw that both can give the same result or output, but they are written differently. I also learned that a function can have no return and only use console.log() to display something, just like sayHello();.

### 12_destructuring.js
In this part, I learned about destructuring. I learned how to get values directly from an object, such as the name and age. Also, I learned that destructuring can also be used in a function parameter to get a specific value from an object. 

### 13_spread_rest.js
In this part, I learned how the spread operator can copy the values from an array and object and add new values to them. I also learned to sum the total values of multiple numbers using the rest operator in the sum() function.

### 14_classes_inheritance.js
What I learned in this part is to use constructor to set a value. Also, learned inheritance where Student extends the Person class. I also added the code() function to Student to display the name + is coding. 

### 15_modules_exports.js
In this part, I learned how to use export to make a function or value available to another javascript file. Just like in the example, I used export default for the greet function and export for the userInfo object. 

### 16_modules_import.js
In this part, I import the javascript file export in the previous or another javascript file to copy what the functions and values from it. 

### 17_logical_operators.js
In this part, I learned that there are different values that can be either truthy or falsy. I also learn how to used && and || by checking the username and password and different string values. 

### 18_ternary_nullish.js
In this part, I just modify some values and added display message and check if grade is pass or fail. And check if the number I added is even or odd. Additionaly, knew about || which check if the value is falsy, and ?? which check if the value is null or undefined. 

### 19_strings_numbers.js
What I learned in this part is to use trim() to remove extra spaces from the start and end of the string. I also learned how to use split() to separate the first and last name. I also learned to use toUpperCase() to make the string uppercase. Additionally, I learned how to use includes() to check if a specific value is included in a string, which returns true if it is included and false if not. Lastly, I learned how to use slice() to get a specific portion of the string. Just like what I did, I used slice(8, 16) to get only my last name, "Gultiano". And use ${} to get specific value, just like what I did to get my first and last name. I also learned how to use parseInt() to get only the integer from a string, just like parseInt("20px") which returns 20. I also learned how to use toFixed() to set the number of decimal places, just like (19.9999).toFixed(2) which returns "20.00". Lastly, i learned about Nan which means Not a Number. Just like in the example, it tried to divide the string which is "abc" by 2, which resulted to NaN. And use Number.isNaN() to check if the value is NaN, and if does, it returns true value. 

### 20_array_methods.js
In this part, I learned how to create an array with objects containing the student name and grade. I also learned how to use filter() to get the students who passed, find() to find a specific student, some() to check if at least one student meets the condition, and every() to check if all students meet the condition. Lastly, I learned how to use sort() to arrange the students based on their grades. 

### 21_errors_json.js
Meanwhile here, I learnned that the value of b is equal to 0, and by that it cannot divide by zero as well. I also learned how to use throw and try catch to handle error and display error message. Additonaly, how to use JSON.stringify() to convert an object into string. 

### 22_async_javascript.js
What I learned in this part is about async or asynchronous using callback, promises, and async/await. Just like in the previous part, I encounter setTimeout() to throw or display user information after a certain of time. I also knew about fetch() to get data from an API. Lastly, learned the difference between synchronous and asynchronous, where async can run later while the other code continues running. While synchronous runs the code one by one and waits for the current code to finish before moving to the next one.

### 23_closures_scope.js
What I learned in the last part is about block scope. Just like in the example, it declared let inside of if block which can only be access inside that block. And when I tried to access insideBlock outside the block, it throws an errors message "insideBlock doesn't exist here". Lastly, learned createCounter() to count numbers. Just like in the example it creates separate counter for A, B, C. To test my understanding, I added counterC to see if it will work separate or different from counterA and counterB.