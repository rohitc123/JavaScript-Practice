// function myFunction(){
//     console.log("Rohit nanasaheb chavan");
//     console.log("skn sinhagad college ,korti");
// }
// myFunction();

//parameterized function or argument

function add(a,b){
    console.log('addition is= ',a+b);
}
add(126,300);

//return value by function

function sum(x,y){
    s=x-y;
    return s;
}
let val=sum(23,12);
console.log(val)


//Arrow function

//arrowFun is variable act as function

const arrowFun=(a,b)=>{
    console.log(a+b);
}
arrowFun(2,3);


//count the vowels in string
function vowel(str){
    let j=0
    let count=0;
    for(let j=0;j<str.length;j++){
        if(str[j]=='a' || str[j]=='e' || str[j]=='i' || str[j]=='o' || str[j]=='u'){
            count++;
        }
    }
    console.log(count);
}
vowel('apnacollege');


// using arrow function

const countVow=(str)=>{
    let j=0
    let count=0;
    for(let j=0;j<str.length;j++){
        if(str[j]=='a' || str[j]=='e' || str[j]=='i' || str[j]=='o' || str[j]=='u'){
            count++;
        }
    }
    console.log(count);
}
countVow('rohit');

//methods in js

//forEach()

let arr=[1,2,3,4,5];
arr.forEach(function print(val){
    console.log(val);
})

// //forEach() with arrow function
let arr1=['pune','thane','goa','satara'];
arr1.forEach((val)=>{
    console.log(val.toUpperCase());
})



// //print square of each no using forEach()

let num=[1,2,3,4,5,6];
num.forEach((val)=>{
    console.log(val*val);
})


// //map()

let num1=[22,44,66];
let newArr=num1.map((val)=>{
    return val**2;
})
console.log(newArr);

// //filter()

let ar=[11,22,23,27,34,56,78,79];

let evenArr=ar.filter((val)=>{
    return val%2==0;
});
console.log(evenArr);

// //reduce()

let ex=[1,2,3,4]

const output=ex.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(output)


// // largest no from arr

let ex2=[5,7,23,123,32,10];
const res=ex2.reduce((prev,curr)=>{
    return curr<prev ? curr: prev;
})

console.log(res)



// filterout the maks of student that score>90;

let arry=[87,93,64,99,86];
let newArry=arry.filter((val)=>{
    return val>90;
})
console.log(newArry);


//

let size=prompt("enter number");
let a=[];
for(i=1;i<=size;i++){
    a[i-1]=i;
}
console.log(a)

let result=a.reduce((pre,cur)=>{
    return pre+cur;
})
console.log(result)

let result1=a.reduce((pre,cur)=>{
    return pre*cur;
})
console.log(result1)