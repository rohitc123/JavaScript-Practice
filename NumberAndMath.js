const balance = new Number(100)
console.log(balance);

// methods

// 1) toString()
console.log(balance.toString())
console.log(typeof(balance.toString()))

// 2) toFixed() - convert it into decimal place that  we want to require
console.log(balance.toFixed(2))

// 3)toPrecision() - round of the value that we want
let val=123.890
console.log(val.toPrecision(4));

// 4) toLocalString()

let num =100000
console.log(num.toLocaleString('en-IN'));


//********************************************MATH********************************************* */

console.log(Math);
console.log(Math.abs(-3))
console.log(Math.round(32.4))
console.log(Math.ceil(32.4))
console.log(Math.floor(32.4)) 
console.log(Math.max(23,56,34,12));
console.log(Math.min(23,56,34,12));

//random() - values between 0 and 1
console.log(Math.random());
console.log(Math.random() *10 + 1);  // return always greter that 1 any random value while adding 1

let min=10
let max=20
console.log(Math.random() *10 + 1 + max);









