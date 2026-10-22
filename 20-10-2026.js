// Primitive property → original won't change when you update the copied property.
// Nested object with spread ... → original will change if you update a nested property.
// Nested object with structuredClone() → original won't change.

const a = { score: 10, info: { age: 25 } };
const b = { ...a };
a.score=90;
b.score = 50;
b.info.age = 30;

const c=structuredClone(a);   // Nested object with structuredClone() → original won't change.
c.info.age=90;

console.log(a.score);   //10
console.log(a.info.age); //30

console.log(a.info.age);  //30


// score is a primitive, so a.score remains 10. info is a shared nested object, so a.info.age becomes 30.

//-------------------------- 1. Three ways to copy objects--------------------------------

// Method 1: Spread operator — shallow copy
// const a = { age: 25, user: { name: "Aki" } };
// const b = { ...a };

// b.user.name = "Ram";

// console.log(a.user.name); // "Ram" ❌


// The nested object is shared.
// Method 2: structuredClone() — deep copy
// const a = { age: 25, user: { name: "Aki" } };
// const b = structuredClone(a);

// b.user.name = "Ram";

// console.log(a.user.name); // "Aki" ✅


// Method 3: Manually copy the nested object
// const a = { age: 25, user: { name: "Aki" } };

// const b = {
//   ...a,
//   user: { ...a.user }
// };

// b.user.name = "Ram";

// console.log(a.user.name); // "Aki" ✅

// ------------------------------------------------------------------------------------

//null vs undefined

console.log(typeof undefined);  //undefined
console.log(typeof null)     //object

let a1;
let b1=null;
console.log(a1==b1);   //true
console.log(a1===b1);  //false
// This is a historical bug in JavaScript that was kept for backward compatibility.
// Although typeof null returns "object", null is actually a primitive value, not an object.

// 2. When does null become 0?
// When JavaScript converts null to a number:
console.log(Number(null)); // 0
console.log(null > 0);  // false
console.log(null >= 0); // true

console.log(null == 0);  // false
console.log(null === 0); // false


// Why?
// - == has a special rule for null; it does not convert null to 0 in this comparison.
// - === compares without type conversion, and null and 0 have different types.

console.log(undefined+5) //NaN

//When JavaScript performs numeric addition with undefined, it converts undefined to the numeric value NaN.
// NaN means Not a Number. It represents an invalid or unrepresentable numeric result.

console.log(undefined+null);

// Step 1: Look at the code
console.log(null + "5");


// We have two operands:
// - null — a primitive value.
// - "5" — a string because it is inside quotation marks.
// Step 2: Understand the + operator
// In JavaScript, the + operator can do two things:
// 1. Addition — adds numbers.
// 2. String concatenation — joins strings and other values into a string.
// When one operand is a string, the + operator performs string concatenation.
// Step 3: Convert the operands to strings
// JavaScript converts null to the string "null" for this concatenation.
// Conceptually:
console.log("null" + "5");


// Step 4: Join the strings
"null" + "5" // "null5"


// Output:
// null5


console.log(5 + "2" + 3);


// We have three values:
// - 5 → Number
// - "2" → String
// - 3 → Number
// The important thing is that JavaScript evaluates this expression from left to right
// because the + operator is left-associative.
// Step 2: Evaluate 5 + "2"
// 5 + "2"


// One operand is a string, so JavaScript performs string concatenation.
// It converts the number 5 into the string "5".
"5" + "2" // "52"


// Now the intermediate result is "52" (a string).
// Step 3: Evaluate "52" + 3
// Next, JavaScript evaluates:
"52" + 3


// Again, one operand is a string. JavaScript converts 3 into "3" and joins the strings.
"52" + "3" // "523"


// Step 4: Final output
console.log(5 + "2" + 3);

// Output: "523"

console.log(5 + 2 + "3" + 4 + 1);   //7341

// ----------------------------------------------------------------------

var a=4000;
{
    var a=5000;
}

let b=a;
{
    let b=6000;
}

console.log(b);

// var → ignores ordinary block boundaries.
// let → respects block boundaries.
// // Assigning a new let variable inside a block does not overwrite an outer variable with the same name.

// ------------------------------------------------------------
// Slice = select a portion; original stays the same.
// Splice = change the original array.


// Remember this interview trick:
// - slice(1, 3) → starts at index 1, stops before index 3.
// - splice(1, 3) → starts at index 1, removes 3 elements.


const arr=[10,20,30,40,50];

const result=arr.slice(1,3);

console.log(result)  //[20,30]  SLICE  slice(start, end) copies a portion of an array. The end index is excluded.
console.log(arr);

const arr1=[1,2,3,4,5,6];
const res=arr1.splice(1,3); //[2,3,4]            splice(start, deleteCount, itemsToAdd...) changes the original array.

console.log(res);
console.log(arr1);   //[1,5,6]


// A. Remove items
// const arr = [10, 20, 30, 40, 50];

// const result = arr.splice(1, 2);

// console.log(result); // [20, 30]
// console.log(arr);    // [10, 40, 50]


// It starts at index 1 and removes 2 items.
// B. Add an item
const arr2 = [10, 20, 30];

arr2.splice(1, 0, 15);

console.log(arr2); // [10, 15, 20, 30]


// 0 means remove zero items, then insert 15 at index 1.
// C. Replace an item
const arr3 = [10, 20, 30];

arr3.splice(1, 1, 99);

console.log(arr3); // [10, 99, 30]


// Remove one item at index 1 (20) and insert 99.



//4. Important interview question
// What happens here?
const numbers = [1, 2, 3];

const a5 = numbers.map(n => n * 2);
const b5 = numbers.forEach(n => n * 2);

console.log(a5);
console.log(b5);


// Output:
// [2, 4, 6]
// undefined


// Why? map() collects the callback's returned values. forEach() ignores those values.
// One more important point: both methods can still cause side effects if your callback modifies external variables or mutates objects. Neither method automatically makes everything immutable.

// Your turn — interview practice
// What is the output?
const arr7 = [1, 2, 3];

const result1 = arr.forEach((num) => {
  return num * 2;
});

console.log(result1);  //undefined
// The answer is simple: forEach() is designed to perform an action for every element, not to create a new array.


// Why? Its purpose is to execute a callback for each array element. If you want to collect the returned values into a new array, JavaScript provides map() for that purpose.
// Think of it this way:
// - map() → transform and collect.
// - forEach() → perform an action.
// 2. Real-world example: Displaying products
// Imagine you're building an e-commerce website.

// Suppose you want to print every product name in the console.
// const products = ["Headphones", "Watch", "Keyboard"];

// products.forEach((product) => {
//   console.log(product);
// });


// Output:
// Headphones
// Watch
// Keyboard


// You don't need a new array. You simply want to perform an action for every product.
// That's when forEach() is useful.
// 3. Practical examples of forEach()
// Example A: Display each user
// const users = ["Akila", "Priya", "Ravi"];

// users.forEach((user) => {
//   console.log(`Welcome, ${user}!`);
// });


// Purpose: display a welcome message for each user.
// Example B: Calculate a total using an external variable
// const prices = [100, 200, 300];
// let total = 0;

// prices.forEach((price) => {
//   total += price;
// });

// console.log(total); // 600


// Purpose: perform an action on each price to update the total.
// Notice that forEach() itself doesn't return the total. The total variable stores it.
// Example C: Update the DOM
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.disabled = true;
// });


// Purpose: disable every button on the page.
// Again, you don't need a new array of return values. You want to perform an action on each button.
// 4. When should you use map() instead?
// Suppose you need to double every price and use the new values somewhere else.
// const prices = [100, 200, 300];

// const doubledPrices = prices.map((price) => {
//   return price * 2;
// });

// console.log(doubledPrices);
// // [200, 400, 600]


// Here, you need a new array, so map() is the correct choice.

// -------------------------------------------------------------------------------


// 1. filter() — select matching elements
// Purpose: filter() creates a new array containing only the elements that satisfy a condition.
// Example: Find marks greater than or equal to 80.

const arr=[60,67,70,80,90];

const result=arr.filter((fil)=>fil>=80)
console.log(result);   //[80,90]  gives a new array

console.log(arr);

const result2=arr.reduce((ar,b)=>{ return ar+b},0);
console.log(result2)


const nums = [1, 2, 3, 4, 5];

const resu = nums.filter((n) => n % 2 === 0);

console.log(resu);  //[2,4]

//Interview tip
// Remember the difference:
// - filter() returns the original elements that pass a condition.
// - map() returns the values produced by transforming each element.
// For example:
[1, 2, 3, 4, 5].filter(n => n % 2 === 0);
// [2, 4]

[1, 2, 3, 4, 5].map(n => n % 2 === 0);
// [false, true, false, true, false]

//3. Remember this for interviews
// - map() → transforms each item and returns a new array.
// - filter() → selects items that satisfy a condition.
// - forEach() → performs an action for each item; returns undefined.
// - reduce() → combines items into one accumulated result.
// Memory trick: reduce() keeps adding to the accumulator until there are no elements left.

console.log([1,2,3,4,5].reduce((a,b)=>{return a*b},1));  //120

console.log([2,4,2,3].reduce((a,b)=>a+b))   //11          This is called an implicit return. JavaScript automatically returns the expression a + b.
console.log([2,4,2,3].reduce((a,b)=>{return a+b})); //11    This is an explicit return. You must write return to return the result.

console.log([2,4,2,3].reduce((a,b)=>{a+b}));   //undefined

//This is an important JavaScript interview concept: when you use curly braces {} in an arrow function,
//  you must write return if you want to return a value.


