// let str='rohit';
// let str1="pandharpur";

// console.log(str1[2]);

let obj={
    item:"pen",
    price:10
};

console.log("the cost of",obj.item,"is",obj.price,"rupees");

//templet liteals- created by backticks it is also called string interpolation.b
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);

//string method

//1.toUpperCase()
let str='javascript';
newStr=str.toUpperCase();
console.log(newStr)

//2.toLowerCase()
let str1='NANASAHEB';
newStr1=str1.toLowerCase();
console.log(newStr1)

//3.trim()
let str2="       javascript learn     ";
console.log(str2.trim());

//4.st.slice(start,end)

let s='1234567'
let s1='helloworld'
console.log(s.slice(0,7));
console.log(s1.slice(0,5));

//5 str.concate(str2)

let str3='rohit';
let str4='chavan';

console.log(str3.concat(str4));
let res=str3+str4;
console.log(res)

//6 str.replace(serchval,newval)

let st='hello';
console.log(st.replace('h','y'));

//7 str.charAt(idx)- CharAt(indexVal) - which character in which position
let st1='ilovejs'
console.log(st1.charAt(0))

//practice


let username=prompt("enter username");
let le=username.length;
let str5='@'+username+le;
console.log(str5);


