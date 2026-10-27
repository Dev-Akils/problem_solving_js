//impure and pure function

function pure(a,b){
 return a+b;
}

console.log(pure(10,20))
console.log(pure(10,20))
console.log(pure(10,20))

// A pure function satisfies two conditions:
// 1. It always returns the same output for the same input.
// 2. It does not cause side effects, such as modifying external variables or changing the original array.
//-----------------------------------------
// 2. Impure Function
// An impure function either produces different results for the same input because it depends on changing external state, or causes side effects.


let total=10;
function impure(a){
    total= total+a;
    return total;
}

console.log(impure(2));
console.log(impure(2));
console.log(impure(2));