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

}console.log("Largest number in the array:" + largest());
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

function insertion(){
    let input=[1,2,3,4];
    let target=5;
    for(let i=0;i<input.length;i++){
        for(j=i+1;j<input.length;j++){
            if(input[i]+input[j]===target)
                return [i,j];
        }
    }
}

console.log("Expected output:"+insertion());



