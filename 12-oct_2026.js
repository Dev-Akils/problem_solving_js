
console.log({} + []);  //o/p: [object Object]
//  "" + "[object Object]"  JavaScript converts the object and array into primitive values when using the + operator.
console.log([] + {});

console.log([] + []);   // ""  empty string
console.log([2, 4, 5]   //2,4,54,5,6,7
    + [4, 5, 6, 7])

console.log([5] + 10); //510

console.log([] + 5);  //5

console.log({} + 5) //[object object]5


console.log(typeof NaN);  // NaN belongs to the Number type, so typeof NaN returns "number".


//-----------------------------

let arr = [10, 20, 30];

arr[10] = 100;
console.log(arr); //[ 10, 20, 30, <7 empty items>, 100 ]
//-----------------------------------------------------------------
//This does not create a new object. Both variables refer to the same object.
//this is a JavaScript reference type and memory concept interview question!
const abc = { a: 100 }
const q = abc
q.a = 200
console.log(abc.a)

//The spread operator creates a shallow copy. For a flat object, changing a copied property doesn't affect the original.
//With nested objects, the nested references are still shared.
//------------------
//--------------------------creating way to clone object??
// We can use the spread operator, Object.assign(), or structuredClone().
//  Spread and Object.assign() create shallow copies,
//  whereas structuredClone() can create a deep copy for supported data types.
const spe = { ...abc }
spe.a = 400;
console.log(abc.a);   //200
console.log(spe.a);    //400
//00000000000000000000000000000000000000000000000000
//Important: This works differently when a property contains a nested object.
const ab = {
  a: 200,
  user: { name: "Akila" }
};

const spe = { ...ab };

spe.user.name = "Priya";

console.log(ab.user.name); // "Priya"

//Interview tip: const prevents
// reassignment of the variable, not mutation of the object it references.

const re = { a: 40 };
const qe = re
// qe={a:50}
// console.log(re.a);    //TypeError: Assignment to constant variable.

//---------------------------------------
//“infinite currying” in JavaScript, or possibly “infinite looping.”

function sum(a) {
    return function (b) {
        // if(b === undefined){
        //     return a
        // }

        return sum(a + b);
    }
}

console.log(sum(1, 2, 3)); //[Function (anonymous)]   now it return a function
// if u want accumulation do some changes
// console.log(sum(1)(2)(3)());  //6


//Interview tip: Currying often works together with closures. The inner function
// remembers the outer function's variable a, 
// even after the outer function has finished executing.

//--notes for the above------------

//1. Your code
// function sum(a) {
//     return function (b) {
//         return sum(a + b);
//     };
// }

// console.log(sum(1, 2, 3));


// Output: A function is returned, not a number.
// Why? Because JavaScript passes only the first argument, 1, to a. Your function accepts one parameter, so the extra arguments 2 and 3 are ignored.
// Then sum(1) returns an inner function waiting for b.
// 2. Why do we use currying?
// Currying transforms a function that takes multiple arguments into a sequence of functions that each take one argument.
// For example:
// sum(1)(2)(3)


// Here:
// - sum(1) receives 1.
// - (2) passes 2 to the returned function.
// - (3) passes 3 to the next returned function.
// However, your current function never produces the final sum. It keeps returning another function.
// 3. How can we make it work?
// One simple approach is to define a stopping condition:
// function sum(a) {
//     return function (b) {
//         if (b === undefined) {
//             return a;
//         }
//         return sum(a + b);
//     };
// }

// console.log(sum(1)(2)(3)()); // 6


// The final () tells the function that there are no more numbers to add.
// 4. Where is currying useful?
// - Reusing functions with fixed arguments.
// - Creating configurable functions.
// - Functional programming and composing operations.


//i just try traditional way currying
function add(nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        // let sum=nums[0]+nums[1];  first 2 elements

        temp = temp + nums[i]
    }
    return temp;
}
console.log(add([1, 2, 3]))  //6

//another problem
//console.log(add([1, 2, 3, 4, 5, 6]));
// Expected output: 12
//Can you modify your function to find the sum of only the even numbers?

function onlyeven(arr) {
    let temp = 0;
    let array = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % 2 === 0) {
                // temp=temp+arr[i]   //sum of, using temp as a accumulator
                temp++;   //2 for counting occurances numbers
            }



            // if(arr[i]>arr[j]){
            //     array=arr[i];
            //     arr[i]=arr[j];
            //     arr[j]=array;

            // }

        }
    }
    //    return array;
    return temp;
}

console.log(onlyeven([3, 4, 5, 2]));

function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([12, 5, 30, 8, 21]));
// Expected: 30
