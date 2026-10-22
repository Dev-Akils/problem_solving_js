//x[y]	Object y becomes the string "[object Object]"
// x[z]	Object z becomes the same string
// x[z] = ...	Overwrites the value previously stored under that key
// x[y] at the end	Returns { name: "akila" }

let x={},y={name:"aki"},z={name:"samarth"}
x[y]={name:"inthu"}
x[z]={name:"akila"}

console.log(x[y]);


//What does x[y] mean?
// x[y] = { name: "inthu" };


// This is the tricky part!
// You might think y is an object, so JavaScript will use the whole object as the key. But ordinary JavaScript objects cannot use another object directly as a unique key.
// When JavaScript uses an object as a property key, it converts it to a string in this situation.
// For example:
// String(y)


// The result is:
// "[object Object]"


// Therefore, this line:
// x[y] = { name: "inthu" };


// Actually behaves like this:
// x["[object Object]"] = { name: "inthu" };


// Now x looks like this:
// {
//   "[object Object]": { name: "inthu" }
// }


// Step 3: What happens in the next line?
// x[z] = { name: "akila" };


// Here, z is also an object.
// JavaScript converts z to the same string:
// String(z) // "[object Object]"


// So this line behaves like:
// x["[object Object]"] = { name: "akila" };


// Important: The key already exists! So JavaScript replaces its previous value, { name: "inthu" }, with { name: "akila" }.
// Now x contains:
// {
//   "[object Object]": { name: "akila" }
// }


// The value "inthu" has been overwritten.


const a={name:"aki",age:25,role:"dev"}
let b={...a,name:"ram"} //b={name:"ram",age:25,role:"dev"}
const {name,...xyz}=a  // except name , remaining i want   xyz= {age:25,role:"dev}"
console.log(xyz,b);     //  { age: 25, role: 'dev' } { name: 'ram', age: 25, role: 'dev' }                              



//template literal

var x1=["akila","am"];

console.log(`${x1}`)


function templ(str){
    console.log("Hello",`${str}`)
}

console.log(templ("akila"));

console.log(templ("ak"));
console.log(templ("samarth"));


//callback function

function show(callback) {
  console.log("A");   //  focus from first A, then callback, C
  callback();
  console.log("C");
}

show(() => {
  console.log("B");
});
// A B C


function abc(){
    console.log("hello");
}

let sayhi=abc;

sayhi();    //hello

//const sayHi = greet;	Assigns the function reference
// const sayHi = greet();	Calls greet() immediately and assigns its return value

function examp(){
    console.log("aki");
    // return 3
    // return "done"
    return function c(){
        return "done";
    }
}

let aa=examp;
let bb=examp();
let cc=examp()();

aa();
console.log(typeof aa);   //function
console.log(typeof bb)    //string
console.log(bb);
console.log(cc);


//let aa = examp;	Store the function reference
// let bb = examp();	Execute the function and store its return value
// aa();	Execute the function through aa
// console.log(bb);	Print the returned value



//V V IMportand

//3. Remember these names
// Syntax	Name / meaning
// greet	Function reference
// greet()	Function call / invocation
// outer()()	Chained function calls; calls the returned function
// outer()()()	Three consecutive calls, if each call returns another callable function
// Interview answer: “The parentheses used to invoke a function are part of the function ,
// call syntax. When we use outer()(), the first call returns a function, and the second 
// call invokes that returned function.”

//-------------------------------------------------------//
//2. What is currying?
// Currying means converting a function that takes multiple arguments
//  into a sequence of functions, each taking one argument at a time.
// For example, a normal function:
// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(2, 3, 4)); // 9


// The curried version:
// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(add(2)(3)(4)); // 9


// Notice the difference:
// - add(2) passes the first argument and returns a function.
// - add(2)(3) passes the second argument and returns another function.
// - add(2)(3)(4) passes the third argument and calculates the result.
// Remember for interviews
// - a()()() — consecutive function calls.
// - add(2)(3)(4) — a curried function call because each 
// function accepts one argument in sequence.


function cur1(a){
    return function(b){
        return function(c){
            return a+b+c

        }
    }
}

console.log(cur1(1)(2)(3));  //6   its act like a accumulator


// ---------------------------------------------------------------
var num=2;
console.log(num*2);// Output: 4  (Multiplication: 2 * 2)

console.log(num ** 2); // Output: 4  (Exponentiation: 2 to the power of 2)

console.log(2 ** 3 ** 2);  //512            \[3^2 = 3 \times 3 = 9\]   \[ 2^9 = 2\times2\times2\times2\times2\times2\times2\times2\times2\]

// JavaScript creates it as a global 
// variable behind the scenes. This is generally considered a bad practice.

function test(){
    // "use strict"
    salary=40;
    console.log(salary)
}
test();   //40

console.log(salary)

//To Avoid this global

// 1. Default Mode (Sloppy Mode)

// By default, JavaScript automatically hooks salary to the global window object (or global in Node.js).
// javascript
// function test(){
//     salary = 40; // JavaScript automatically makes this: window.salary = 40;
//     console.log(salary);
// }
// test(); // Output: 40

// console.log(window.salary); // Output: 40 (It leaked outside the function!)
// Use code with caution.
// Why this is risky: Any other function in your codebase can now accidentally overwrite salary, leading to bugs that are very hard to track down.

// 2. Strict Mode ("use strict";)

// Modern JavaScript developers use Strict Mode to prevent global leaks. If you add "use strict"; to your script or function, JavaScript will throw a ReferenceError instead of letting the variable leak:
// javascript
// function test(){
//     "use strict";
//     salary = 40; // ❌ ReferenceError: salary is not defined
//     console.log(salary);
// }
// test();
// Use code with caution.

// How to Fix It

// To fix this, always explicitly declare your variables using let or const so they stay safely scoped inside the function:
// javascript
// function test(){
//     let salary = 40; // Local scope: it only exists inside this function
//     console.log(salary);
// }
// test(); // Output: 40


function test1(){
    console.log(test1.abc)
}
test1();      //undefined

test1.abc=400;
test1.abc=600;
test1();  //600

//1. First Call (undefined): When you call test1() the first time, the property abc does not exist on the function object yet. In JavaScript, looking up a non-existent property on an object always returns undefined.
// 2. Assignments: test1.abc = 400 creates the property and sets it to 400. test1.abc = 600 overwrites that value with 600.
// 3. Second Call (600): When you call test1() again, the property now exists, so it prints 600.

console.log({}=={});  //false
console.log({} === {});  //false

// In JavaScript, objects are reference types, not primitive values (like numbers or strings).
// When you compare primitives, JavaScript compares their values:
// • 5 === 5 is true because the values are identical.
// When you compare objects, JavaScript compares their references (their locations in computer memory), not their content.

//1. The first {} creates Object A at Memory Location 0x01.
// 2. The second {} creates Object B at Memory Location 0x02.

console.log([]===[]);
console.log(6=="6")
console.log(6==='6')

//----------------

let a2 = {
    name: "akila"
};

let a3 = {
    ...a2 // 👈 Fixed from 'a' to 'a2'
};

a3.name = "kanista"; // 👈 Fixed from 'b' to 'a3'

console.log(a2); // Output: { name: 'akila' }
// Use code with caution.

// Why a2 stays unchanged

// The ... syntax is the spread operator. When you wrote let a3 = { ...a2 },
//  you created a shallow copy of a2.
// Instead of pointing a3 to the exact same memory location as a2,
//  JavaScript created a brand-new object in memory and copied the properties over. 
// Because they are now completely independent objects in memory:
// • Changing a3.name only updates a3.
// • a2.name remains untouched as "akila".

// -------------------------------------------------------------

let d = 10;
let e = new Number(10);
let f = 10;

console.log(d === e); // Output: false
console.log(e === f); // Output: false
// Use code with caution.

// Why does this happen?

// The key here is the strict equality operator (===), which checks both the value and the data type.
// In your code, d and f are standard, primitive numbers. However, by using the new keyword, you explicitly forced JavaScript to wrap the number inside an object.
// • d is a Primitive Number
// • e is an Object (specifically, an instance of the Number wrapper)
// • f is a Primitive Number
// Because a primitive number and an object are different data types, === instantly returns false without even checking the underlying value.

// What if you used loose equality (==)?

// If you swap out === for ==, the results change completely because JavaScript will perform implicit type conversion (coercion) before comparing:
// javascript
console.log(d == e); // Output: true (JavaScript extracts 10 from the object 'e')
console.log(e == f); // Output: true


//-----------------------------------------------

function test2(record){

 if(record=={age:28})console.log("adult")
  else  if(record==={age:28})console.log("adult too")
else console.log("No record")

}

test2({age:28})   //No record


// Why it prints "No record"

// This ties back to what we discussed earlier about how JavaScript compares objects.
// Every time you type { age: 28 }, you are creating a completely brand-new object in memory.
// 1. Inside the function call: test2({ age: 28 }) creates Object A and passes it in as the variable record.
// 2. The first if statement: record == { age: 28 } creates a brand-new Object B on the right side. JavaScript compares their memory references. Because Object A and Object B live in different places in memory, this is false.
// 3. The second if statement: record === { age: 28 } creates a brand-new Object C on the right side. For the exact same reason, this also evaluates to false.
// Since both conditions fail, the code falls back to the else block.

// How to fix it (Proper Object Matching)

// If you want to check the actual data inside the object (structural equality), you need to look at the specific property values:
// javascript
// function test2(record) {
//     if (record && record.age === 28) { // 👈 Check the age property directly
//         console.log("adult");
//     } else {
//         console.log("No record");
//     }
// }

// test2({ age: 28 }); // Output: "adult"