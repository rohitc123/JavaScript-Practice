
// const array =[12,22,33,44,55]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];  
//     console.log(element);
// }


// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }


// for (let i = 1; i <=10; i++) {
//     for (let j =1 ; j <=10 ; j++) {
        
//         console.log(+i ,'*',+j+ ' =',i*j,); 

//     }
//     console.log('  ')
// }


for (let i = 0; i < 5; i++) {
    let space=''
    for (let j = 0; j <=i ; j++) {
        space= space +'*'
    }
    console.log(space)
}


// while loop
let i=0
while (i<20) {
    console.log(i)
    i=i+2
}

//do while
let marks=1
do {
    console.log('marks are:- '+marks);
    marks++
} while (marks<=5);



// size of string

let str1="javascript";
size=0;
for(let i of str1){
    console.log("i= ",i);
    size++;
}
console.log("string size=",size)

//for-in loop

let student={
    name:"rohit",
    age:23,
    cgpa:9.81,
    isPass:true
};

for(let i in student){
    console.log("key= ",i ,"values= ",student[i]);
}


//print even number between 0 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
    
}


//gauess no

let gameNo=30;
let userNo=prompt("enter user no");
while(userNo!=gameNo){
    userNo=prompt("you enter wrong no please enter again");
}
console.log("congatulation! your no is match with gess no");




