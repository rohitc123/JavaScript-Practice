const myNum=[1,2,3]
const newNum=myNum.reduce(function (acc,currVal){
    console.log(`acc:${acc} and currVal:${currVal} `)
    return acc+currVal
},0)

console.log(newNum)

//using ArrowFunction

const total=myNum.reduce((acc,currVal)=> acc+currVal,0)
console.log(total)



const shoppingCart=[
    {
        course1:'JS course',
        price:1299
    },
    {
        course2:'python course',
        price:999
    },
    {
        course3:'webDev course',
        price:3999
    },
    {
        course4:'DSA course',
        price:5000
    },
    {
        course5:'AI course',
        price:9999
    },
]

const priceToPay= shoppingCart.reduce((acc,course)=> acc+course.price,0)
console.log(priceToPay)
