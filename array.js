let arr = [1,2,3,4,5,6,7]
console.log(arr)
console.log(typeof arr);

let player =['rohit','virat','rahul','surya']
console.log(player);

// Array methods

// 1) push() and Pop()

arr.push(9,10)
console.log(arr)

arr.pop()
console.log(arr)

//2) shift() unshift()


arr.shift()
console.log(arr);
player.shift()
console.log(player);


player.unshift('rohit','hardik')
console.log(player);
console.log(arr.unshift(1));

// 3) include(), indexOf()


console.log(arr.includes(10)); // if no include return true else false
console.log(arr.indexOf(4)) // it return index of perticulaar no

// 4) slice() , splice

console.log(arr)
console.log('during slice operation',arr.slice(1,5)) 
console.log('arr after slice operation',arr)
console.log('during splice operation',arr.splice(1,5));
console.log('after splice operation orignal arr',arr);

// 5) concate()

let film = ['damini','khiladi','12thFail','sairat']
let filmstar=['rishi','akshay','manoj','akash']

let newSet=film.concat(filmstar)
console.log(newSet)

// 6) spread operation

let spredOpp = [...film,...filmstar]
console.log(spredOpp);



// //looping in array

//for-loop
let ar=['akshay','ajay','sumit','om','rohit','ram'];
for(let i=0;i<ar.length;i++){
    console.log(ar[i])
}

//for of
for(let name of ar){
    console.log(name.toUpperCase())
}

//average of marks in array

let arr1=[85,97,44,37,76,60]

let sum=0;
for(let i=0;i<arr1.length;i++){
    sum=sum+arr1[i];
}
let avg=sum/arr1.length
console.log(`the average marks of class is ${avg}`);


//apply 10% offer each element in array change it

let items=[250,645,300,900,50];
let i=0;

for(let val of items){
    let offer=val/10;
    items[i]=items[i]-offer; 
    i++;
}
console.log(items)

