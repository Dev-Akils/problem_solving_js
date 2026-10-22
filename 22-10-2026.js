let arr=[2,4,5,"akila",'a','100'];


function separate(arr){
    let num=[];str=[];char=[];
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==='number'){
        num.push(arr[i]);
    }else if(arr[i].length>1){
        str.push(arr[i]);
    }else char.push(arr[i]);

//    return num,str,char;
  
}  return {num,str,char }}
console.log(separate(arr));

// Remember for interviews:
// - typeof 'a' → "string"
// - typeof 'akila' → "string"
// - JavaScript has no separate character data type.
// - .length === 1 lets you identify a string containing one character.
// One important detail: '100' has a length of 3, but it is still a string, not a number


//2 yes or no

function isInclude(str1,str2){
    for(let i=0;i<str1.length;i++){
        if(str1.includes(str2[i]))return true;
        else return false;}

}
console.log(isInclude("akila","ilak"));  //true

console.log(isInclude("akila","ooooooooa"));   //false
console.log(isInclude("akila","b000000"));   //false


//-------------------------------------------------------------------------------------
console.log("akila"-100); //NaN
console.log("akila"+100); //akila100

//-----------------------------------------------------------------------------------


// call()

// Executes immediately.

// sayName.call(user);




// apply()

// Executes immediately; accepts arguments as an array.

// sayName.apply(user);




// bind()

// Returns a new function to execute later.

// const result = sayName.bind(user);

// Interview tip: Remember this simple rule: call = execute now, apply = execute now with an argument array, bind = create a function for later.

// --------------------------------Arrow function-----------------------------

// Remember these three interview points
// - Hoisting: A function declaration can be called before its declaration. An arrow function assigned to const cannot be accessed before initialization.
// - Constructor: Arrow functions cannot be used with new.
// - this: Arrow functions inherit this from their surrounding lexical scope; they don't create their own this.


var greet = () => {
    console.log("Hello");
};

greet();  //hello

console.log(greet());  //undefined
console.log(greet);  // [Function: greet]


var greet1 = () => {
    return "Hello";
};
console.log(greet1());  //Hello
console.log(greet1);  // [Function: greet1]
greet1();  //Hello


let aa=[1,3,56,7]

console.log(aa.find((x)=>x>5));   //56
console.log(aa.findIndex((x)=>x>5));  //2
console.log(aa.filter((x)=>x>5));  //[ 56, 7 ]

// JavaScript array.find()	First matching element or object
// JavaScript array.filter()	Array of all matching elements or objects
// MongoDB db.collection.find()	Cursor for all matching documents

//-------------------------------------------------------------------------------------------
// In npm, we have two types of dependencies: `dependencies` and `devDependencies`.

// **Dependencies** are packages required for our application to run in production, such as Express and Mongoose.

// **DevDependencies** are packages used during development, testing, or building, such as Nodemon and ESLint, which are generally not needed at runtime in production.

// We can install production dependencies using `npm install express` and development dependencies using `npm install -D nodemon`.

//-------------------------------------------------------------------------------------------

// `package.json` contains the project information, scripts, and dependencies required by the application. `package-lock.json` records the exact resolved versions of the installed dependencies and their dependency tree.

// The main difference is that `package.json` defines what dependencies the project requires, while `package-lock.json` helps ensure that the same dependency versions are installed across different environments. Both files should generally be committed to Git in an application project.

// Why do we need package-lock.json if we already have package.json? To help install consistent, exact dependency versions.

//-------------------------------------------------------------------------------------------
// 1. What is Hot Module Replacement?
// Hot Module Replacement (HMR) updates a changed module in your application without requiring a full page reload.

// Imagine you're developing a React application and change a button's color from blue to red.

// Without HMR, you might need to reload the entire page to see the change. With HMR, the development tool can 
// update the changed module while keeping the rest 
// of the application running.


// Hot Module Replacement is a development feature that replaces updated modules in an 
// application without reloading the entire page. It helps developers see code changes quickly and improves development
//  productivity. Tools such as Vite and Webpack support HMR, and React Fast
//  Refresh helps update React components while preserving state when possible.

//====================================

// 1. What is the difference between CSS Grid and Flexbox?
// Interview answer:

// CSS Flexbox is a one-dimensional layout system used to arrange elements in a row or a column. CSS Grid is a two-dimensional layout system that manages both rows and columns. I use Flexbox for aligning items in a navbar or a button group, and Grid for creating page layouts, card grids, or dashboards.
// Flexbox	CSS Grid
// One-dimensional	Two-dimensional
// Row or column	Rows and columns
// Best for aligning items in one direction	Best for complex page layouts
// display: flex	display: grid

// /* Flexbox */
// .container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// /* Grid */
// .container {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// }


// Remember: Flexbox = one direction; Grid = rows and columns.
// 2. What is the difference between <figure> and <img>?
// Interview answer:

// The <img> tag is used to display an image on a webpage. The <figure> tag is used to group self-contained content, such as an image, diagram, or illustration, and it can include a caption using <figcaption>. I use <figure> when the image needs to be presented as an independent piece of content with a caption.
// <figure>
//   <img src="building.jpg" alt="Modern building">
//   <figcaption>Modern residential building</figcaption>
// </figure>


// Remember: <img> displays the image; <figure> groups content and can provide a caption.
// 3. What is the required attribute in HTML?
// Interview answer:

// The required attribute is a Boolean attribute used in form elements to make a field mandatory. When a user submits a form without filling in a required field, the browser's built-in form validation prevents submission and prompts the user to complete it. I use it for fields such as name, email, and password. However, server-side validation is also necessary for security.
// <form>
//   <label for="email">Email:</label>
//   <input
//     type="email"
//     id="email"
//     name="email"
//     required
//   >

//   <button type="submit">Submit</button>
// </form>


// Remember: required makes a field mandatory in browser-side form validation, but it does not replace backend validation.
// Quick revision

// Grid vs Flexbox

// Grid: 2D layout. Flexbox: 1D layout.




// Figure vs Image

// img displays an image. figure groups independent content, optionally with a caption.




// Required attribute

// Makes a form field mandatory during browser validation.

// ----------------------------------
// 1. What is the difference between border and outline?
// Interview answer:

// The CSS border property draws a line around an element and takes up space within
//  the element's box model. The outline property draws a line outside the element's border and does not 
//  take up space or affect the layout. A border can be applied
//  to individual sides, while an outline is drawn around the element as a whole.