//Find a largest element
function largest() {
    let arr = [1, 5, 3, 2, 8, 6, 10];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }

    }
    return max;

} console.log("Largest number in the array:" + largest());
//summ of array elements
function sumofarray() {
    let arr = [1, 4, 5, 5, 2];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        // console.log(sum);
    }

    return sum;

}
console.log("Sum of the Array:" + sumofarray());

//leetcode input=[1,2,3,4] target=5 expected output=[0,3]  insertion search algorithm

// Return any one pair” → [0,3] or [1,2] both are correct    [it'll give first pair...]

function insertion() {
    let input = [1, 2, 3, 4];
    let target = 5;
    for (let i = 0; i < input.length; i++) {
        for (j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === target)
                return [i, j];
        }
    }
}

console.log("Expected output:" + insertion());


// count event numbers
function countEven() {
    let arr = [2, 4, 3, 1, 6];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log("Total Even Numbers:" + countEven());

// reverse an String without Reverse()
function reverseAnString() {
    let arr = "Hello"
    let after = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        after += arr[i];
    }
    return after;

}
console.log("Reversing An Array\t:" + reverseAnString())

// reversing an Array
function reverseAnArray() {
    let arr = [1, 4, 5, 6];
    let after = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        after.push(arr[i]);
    }
    return after;

}
console.log("Reversing An Array\t:", reverseAnArray());


// find  Duplicate in an Array----------------------------------

function Duplicate() {
    let arr = [1, 4, 5, 2, 3, 4, 3, 4];
    let withoutduplicate = new Set();
    let duplicateElements = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (withoutduplicate.has(arr[i])) {
            duplicateElements.add(arr[i])
        } else {
            withoutduplicate.add(arr[i])
        }
    }
    return [...duplicateElements]
}
console.log("Duplicate Elements", Duplicate())

// filter using finding duplicate elements

function DuplicateEle() {
    let arr = [2, 4, 5, 4, 5, 4];

    return arr.filter((e, i) => arr.indexOf(e) !== i).filter((e, i, self) => self.indexOf(e) === i)
}

console.log("Duplicate:", DuplicateEle())

function duplicateElement() {
    let arr = [3, 6, 7, 3, 1, 2]
    let duplicate = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
                duplicate.push(arr[i])
            }

        }
    }
    return duplicate;
}
console.log("Duplicate Elements:", duplicateElement());


function duplicate(){
    let arr=[1,4,5,3,5];
    let without=new Set();
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(without.has(arr[i])){
            result.push(arr[i]);
        }else{
            without.add(arr[i]);
        }
    }
    return result;
}
console.log("Duplicate Eleemnts are:",duplicate());

// Occurances
function Occurances(){
    let arr=[2,4,5,3,2,4,4];

    count={};
    for(let i=0;i<arr.length;i++){
        if(count[arr[i]]){
            count[arr[i]]++
        }else{
            count[arr[i]]=1
        }
    }
    return count;

}

console.log("Ocuurances:",Occurances())
// --------------------------------------------------------------------

// First non-repeating character
// 1. The Setup
// The String: It starts with the name "akila".

// The Frequency Map (freq): It creates an empty object to keep track of how many times each letter appears.

// 2. First Loop: Counting the Letters
// The code looks at every character in "akila" one by one:

// It sees a, adds it to the list: {a: 1}

// It sees k, adds it to the list: {a: 1, k: 1}

// It sees i, adds it to the list: {a: 1, k: 1, i: 1}

// It sees l, adds it to the list: {a: 1, k: 1, i: 1, l: 1}

// It sees another a. Since a is already there, it adds 1 to the count: {a: 2, k: 1, i: 1, l: 1}

// 3. Second Loop: Finding the Winner
// Now, it goes through the string "akila" again to find letters where the count is exactly 1 (non-repeating).

// Check a: Count is 2. (Skip)

// Check k: Count is 1. This is the 1st non-repeating character.

// Check i: Count is 1. This is the 2nd non-repeating character.

// 4. The Result
// Because the code has a specific check if(count === 2), it stops as soon as it finds that second unique letter and returns "i".
function nonRepeat() {
    let a = "akila";
    let count = 0;
    let freq = {};

    for (let char of a) {
        // freq[char]=(freq[char] || 0)+1;
        if (freq[char]) {
            freq[char] = freq[char] + 1;
        } else {
            freq[char] = 1; // Add the new key to the object
        }
    }

    //     Let's trace it with "akila" (where freq is {a:2, k:1, i:1, l:1}):
    // Letter 'a': Is freq['a'] === 1? No (it's 2). Skip. count is still 0.

    // Letter 'k': Is freq['k'] === 1? Yes. count++ makes count = 1.

    // Letter 'i': Is freq['i'] === 1? Yes. count++ makes count = 2.

    // Letter 'l': Is freq['l'] === 1? Yes. count++ makes count = 3.

    for (let char of a) {
        if (freq[char] === 1) {
            count++;
            // if(count===2){
            //     return char;
            // }

            if (count === 3) {
                return char;
            }
        }
    }

}
console.log("Non Repeat:", nonRepeat());

// Leetcode problem add Tow num using LinkedList




// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function LinkedList() {

//     let l1=[3,4,5];
//     let l2=[1,6,8];
//     let dummyHead = new ListNode(0);
//     let current = dummyHead;
//     let carry = 0;

//     while (l1 !== null || l2 !== null || carry > 0) {
//         let val1 = l1 ? l1.val : 0;
//         let val2 = l2 ? l2.val : 0;

//         let sum = val1 + val2 + carry;

//         let digit = sum % 10;
//         carry = Math.floor(sum / 10);

//         current.next = new ListNode(digit);
//         current = current.next;

//         if (l1) l1 = l1.next;
//         if (l2) l2 = l2.next;
//     }

//     return dummyHead.next;
// }
// 
// console.log(LinkedList());


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function LinkedList(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;

        let digit = sum % 10;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(digit);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
}

function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 4]);

let result = LinkedList(l1, l2);

console.log(result);

// Flattern Nestered Array

let arr=[1,[3,[5,7,8,[6,9,0]]],9];

function flatternArray(arr){
    // return arr.flat(); Flattern Array [ 1, 3, [ 5, 7, 8, [ 6, 9, 0 ] ], 9 ]

    // return arr.flat(Infinity);


    // 1 → add directly          Recursion
// [2,[3]] → flatten again
//   2 → add
//   [3] → flatten again
//      3 → add
// 4 → add

    return arr.reduce((acc,val)=>Array.isArray(val)? acc.concat(flatternArray(val)):acc.concat(val),[])
}
console.log("Flattern Array",flatternArray(arr))







