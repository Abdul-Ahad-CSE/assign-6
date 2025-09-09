1) What is the difference between var, let, and const?


var: The old way. Variables declared with var are function-scoped. This means they are only known within the function they are created in. It's flexible but can lead to bugs because that can re-declare and update it anywhere.

let: The new, better way to create a variable that can change. let variables are block-scoped, meaning they only exist within the closest set of curly braces {} (like in a loop or if statement). It can change its value, but can't re-declare in the same scope.

const: Used for creating a variable that cannot change (a constant). It is also block-scoped. Must give it a value when created, and can never re-assign it to a new value.

2) What is the difference between map(), forEach(), and filter()?

forEach(): Does something for each item in an array. It's like a for loop. It just executes a function on every element but does not return a new array.
Used to print each item in an array to the console.

map(): Transforms each item in an array and returns a new array with the transformed items. The new array will always be the same length as the original.

filter(): Selects items from an array that meet a certain condition and returns a new array containing only those selected items. The new array can be shorter than the original.

3) What are arrow functions in ES6?

Arrow functions (=>) are a shorter and cleaner way to write functions in JavaScript.

Traditional Function:

function add(a, b) {
  return a + b;
}

Arrow Function:

const add = (a, b) => a + b;

Shorter Syntax: Less to type. If the function has only one line, the {} and return are implied.

4) How does destructuring assignment work in ES6?

Destructuring is a shortcut for unpacking values from arrays or properties from objects into their own variables.
Example:
Without Destructuring (The Old Way):

const person = {
  name: "Alice",
  age: 30
};

const name = person.name;
const age = person.age;

With Destructuring (The New Way):

const person = {
  name: "Alice",
  age: 30
};

const { name, age } = person; 
It's just a cleaner, faster way to get the data need out of a collection. It works for both objects {} and arrays [].

5) Explain template literals in ES6. How are they different from string concatenation?

Template literals are an improved way to create strings, using backticks (`) instead of single or double quotes.

They are different from old-fashioned string concatenation (+) in two main ways:

Easier Variable Embedding: Can be embed variables or any JavaScript expression directly into the string using the ${...} syntax. It's much easier to read.

Multi-line Strings: Can be created strings that span multiple lines just by hitting "Enter".

Example:
String Concatenation (The Old Way):
const name = "Bob";
const message = "Hello, " + name + "!\nWelcome to the site.";

Template Literal (The New Way):
const name = "Bob";
const message = `Hello, ${name}!
Welcome to the site.`;