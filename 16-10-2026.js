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