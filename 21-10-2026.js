//alternative way merging
const str1="xyz"
const str2="123"
function merge(){
const str3=str1.split("")  // it make a string into array ... no need we can direcly access an string for merging
const str4=str2.split("")
let merging=""
let final="";


// for(let i=0;i<str3.length;i++){
//     // for(let j=0;j<str4.length;j++){   // it create a column
//         merging=str3[i]+str4[i]
//        final=final+merging;

//     // }

// } 
// return final;
// }

for(let i=0;i<str1.length;i++){         //this is fine ............

    final+=str1[i]+str2[i];
}
return final;
}
console.log(merge());


//--------------------------------
//find out which one gives a sum of 25

let arr=[15,10,11,8,12];

function sumof(){
let sum=[];

    // for(let i=0;i<arr.length;i++){
        // while(arr[i]+arr[i+1]==25){        method-1  not a soln
        //     sum.push([arr[i],arr[i+1]])
        //     break
        // }

        //     if(arr[i]+arr[i+1]==25){        method-2not a soln
        //     sum.push([arr[i],arr[i+1]])
         
        // }

    // }

    // solution                 

     for(let i=0;i<arr.length;i++){                  //this is better
        for(let j=i+1;j<arr.length;j++){
            //  console.log(
            //     `i=${i}, j=${j} | ${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`
            // );
            if(arr[i]+arr[j]==25){
                sum.push([arr[i],arr[j]])
                
            }
        }
    }
// i=0, j=1 | 15 + 10 = 25
// i=0, j=2 | 15 + 11 = 26
// i=0, j=3 | 15 + 8 = 23
// i=0, j=4 | 15 + 12 = 27
// i=1, j=1 | 10 + 10 = 20
// i=1, j=2 | 10 + 11 = 21
// i=1, j=3 | 10 + 8 = 18
// i=1, j=4 | 10 + 12 = 22
// i=2, j=1 | 11 + 10 = 21
// i=2, j=2 | 11 + 11 = 22
// i=2, j=3 | 11 + 8 = 19
// i=2, j=4 | 11 + 12 = 23
// i=3, j=1 | 8 + 10 = 18
// i=3, j=2 | 8 + 11 = 19
// i=3, j=3 | 8 + 8 = 16
// i=3, j=4 | 8 + 12 = 20
// i=4, j=1 | 12 + 10 = 22
// i=4, j=2 | 12 + 11 = 23
// i=4, j=3 | 12 + 8 = 20
// i=4, j=4 | 12 + 12 = 24
// [ [ 15, 10 ] ]

    //-------------------------------------------------
    // for(let i=0;i<arr.length;i++){
    //     for(let j=0;j<arr.length;j++){
    //         //  console.log(
    //         //     `i=${i}, j=${j} | ${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`
    //         // );
    //         if(arr[i]+arr[j]==25){
    //             sum.push([arr[i],arr[j]])
                
    //         }
    //     }
    // }




// i=0, j=0 | 15 + 15 = 30
// i=0, j=1 | 15 + 10 = 25
// i=0, j=2 | 15 + 11 = 26
// i=0, j=3 | 15 + 8 = 23
// i=0, j=4 | 15 + 12 = 27
// i=1, j=0 | 10 + 15 = 25
// i=1, j=1 | 10 + 10 = 20
// i=1, j=2 | 10 + 11 = 21
// i=1, j=3 | 10 + 8 = 18
// i=1, j=4 | 10 + 12 = 22
// i=2, j=0 | 11 + 15 = 26
// i=2, j=1 | 11 + 10 = 21
// i=2, j=2 | 11 + 11 = 22
// i=2, j=3 | 11 + 8 = 19
// i=2, j=4 | 11 + 12 = 23
// i=3, j=0 | 8 + 15 = 23
// i=3, j=1 | 8 + 10 = 18
// i=3, j=2 | 8 + 11 = 19
// i=3, j=3 | 8 + 8 = 16
// i=3, j=4 | 8 + 12 = 20
// i=4, j=0 | 12 + 15 = 27
// i=4, j=1 | 12 + 10 = 22
// i=4, j=2 | 12 + 11 = 23
// i=4, j=3 | 12 + 8 = 20
// i=4, j=4 | 12 + 12 = 24
// [ [ 15, 10 ], [ 10, 15 ] ]
    return sum;
}

console.log(sumof());


//find and filter

let a=[3,5,2,1];

let b=a.map((e)=>e*2);
let c=a.map((e)=>e>2);

let d=a.slice(1,3);      //not mutate the original array , gives a new array as a output [5,2]

let e=a.splice(1,2);
console.log(b);     //[ 6, 10, 4, 2 ]
console.log(c);      //[ true, true, false, false ]

console.log(d)

console.log(e)      // [5,2]  change the original array   //we can add, delete , i mean modify the original array

console.log(a);

//----------------------------------------------------------------------------------------

// var outside a function	Global scope (in a classic script)
// var inside a function	Function scope
// var inside an if block	Not limited to that block
// let inside a block	Block scope
// const inside a block	Block scope


//---------------------------------------------------------------------------------

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