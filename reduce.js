// To use the reduce() method in JavaScript, you call it on an array and provide a callback 
// function along with an optional 
// initial value. This method applies the callback 
// function against an accumulator and each element in the array, 
// resulting in a single output value.


let arr=[1,2,8,4,5];

console.log(arr.reduce((acc,elt)=> Math.max(acc,elt))) //Finding the max
console.log(arr.reduce((acc,elt)=> {return Math.max(acc,elt)},9)) //Finding the max in an array and another value
console.log(arr.reduce((acc,elt)=> acc+elt)) //Summing up an array 
console.log(arr.reduce((acc,elt)=> {return acc+elt},1)) //Summing up an array to a particular accumulator