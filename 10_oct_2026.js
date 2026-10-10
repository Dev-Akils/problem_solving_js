console.log("aki"-100); //NaN  
console.log(100-100); //0
console.log("100"-"100"); //0
//operator converts string operands to numbers before performing subtraction.
//+ can convert the other value to a string and concatenate.
//- converts both values to numbers when possible.

console.log("10"-10); //0   

console.log("a"-"a") //NaN

console.log("0" - false); // 0

console.log(10-"10");  //0

console.log("2"-2); //0

console.log("2"+2); //22

console.log("2"+"2") //22

console.log(2+2); //4



console.log(typeof("a"+"a")); //aa

console.log("5"+"1") //51

//-----------------------------------------------------------------------------------------------
//spread operator

let arr1=[1,2,3,4];

let arr2={...arr1};   //{ '0': 1, '1': 2, '2': 3, '3': 4 }
let arr3=[...arr1]   // [ 1, 2, 3, 4 ]
console.log(arr2);

console.log(arr3);


//---------------------------------------------------------------------------------------------------

const ar1=[3,5,6,7,'a','b',"akila"];
// char only i want
//Interview tip: JavaScript doesn't have a separate character data type.
// A single character is represented as a string of length 1.
function charvalue(){
    let ar=[];
    for(let i=0;i<=ar1.length;i++){
        // if(typeof ar1[i]!== 'string' && ar1[i]>='a' && ar1[i]<='z'){    
        if(typeof ar1[i]== 'string' && ar1[i].length==1){
            ar.push(ar1[i]);
        }
    }
    return ar;
}

console.log(charvalue())


//filter
let filterexample=[2,6,7,2,1];

// console.log(filterexample.filter((a)=>a==2));  [2,2]
// console.log(filterexample.map((a)=>a=5));  [ 5, 5, 5, 5, 5 ]

// console.log(filterexample.filter((a)=>a=5)); [ 2, 6, 7, 2, 1 ]

console.log(filterexample.map((a)=>a>5));  //[ false, true, true, false, false ]


