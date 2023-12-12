//! falsy values
// false, 0, -0, BigInt(0n), null, undefined, NaN 

//! truthy values
// [], "0", "false", " ", {}, function(){}

const users = [];

// if(users.length === 0){
//     console.log("Array is Empty");
// }

const obj = {}

// if(Object.keys(obj).length === 0){
//     console.log("Object is Empty");
// }

//! Interesting 
// false == 0 
// false == ""
// 0 == ""

// Nullish Coalescing Operator (??)