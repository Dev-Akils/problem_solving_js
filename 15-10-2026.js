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