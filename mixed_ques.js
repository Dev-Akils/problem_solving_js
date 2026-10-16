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




const user={
    name:"akila",
    greet:()=>{
        console.log(this.name)
    }
}

user.greet();

// An arrow function inherits this from the surrounding scope. It does not bind this to the user object, 
// so this.name is usually undefined in a 
// typical browser script. The exact result can depend on the surrounding execution environment.


// 2. Important differences
// Feature         	Normal function	                               Arrow function
// Syntax   	      function test() {}      	                      const test = () => {}
// this  	        Depends on how it is called   	                  Inherits this from surrounding scope
// Own arguments	 Yes,in ordinary functions	                         No
// Can use new	       Yes, if constructible                            	No
// Hoisting	    Function declarations can be called 
//                   before declaration	                            A const arrow function cannot be used before initialization
// Methods	        Suitable for methods that need their own this	     Useful for callbacks
// Return         	Usually uses return	                               Can return implicitly with concise syntax


// call by value  , call by refernce

let a=10;
let b=a;    //call by value;

let arr=[1,3,5,7,8];
let arr1=arr;    // call by reference

//Routing concepts
// Normal routing means navigating to a predefined route or page.  
//                  /about → About page       /contact → Contact page




// Dynamic routing means using a variable part of the URL to display different content based on the value.

//    /products/101 → Product with ID 101             /products/102 → Product with ID 102
// Next.js uses file-based routing. The folder and file names define the routes.


// Lifting state up means moving state from a child component to 
// its common parent component so 
// multiple child components can share the same data.

//---------------------

// Child → Parent: callback function.



// Parent → Child: props.



// Lifting state up: move shared state to the common parent.


// HTML <meter> vs <progress> tag.
// The <progress> tag displays the completion progress of a task.
// Examples:
// - File downloading
// - File uploading
// - Form completion
// - Installation progress

// 1. <meter> tag
// The <meter> tag displays a measurement within a known range.
// Examples:
// - Battery level
// - Disk space used
// - Rating or score
// - Available storage


// Meter = Measurement. How much of something is available or being used?
// Progress = Process. How much of a task is completed?


// ----------------------------------------------

// 1. What is the required attribute?
// The required attribute makes a form field mandatory. The user must provide a valid value 
// before the form can be submitted.

//required---------	A value must be provided
// disabled----------	The field cannot normally be interacted with; it is also excluded from form submission
// readonly ---------	The value cannot be edited, but it can still be submitted

//------------------------------------------------------------------------
// display: none → hides the element and removes its space from the layout.
// visibility: hidden → hides the element but keeps its space in the layout.

// Remember for interviews:
// - display: none → hide and remove layout space.
// - visibility: hidden → hide but preserve layout space.
// One small detail: display: none doesn't necessarily disturb every nearby element; the effect depends on the layout.
//  But your understanding of why we preserve space is correct!

//-----------------------------------------------
// content-box — default value.
// border-box — commonly used in modern web development.

// content-box → 200px content + extra space = 250px total
// border-box → 200px total, everything fits inside