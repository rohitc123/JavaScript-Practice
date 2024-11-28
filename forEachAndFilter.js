//forEach loop

const array=['pune','solapur','nashik','thane']

const values=array.forEach( (items)=>{
    console.log(items)
    return items
})
console.log(values);
// forEach not return values

//filter()

const myNums=[1,2,3,4,5,6,7,8]
const value=myNums.filter((nums)=> nums>4)
console.log(value);
//filter() return the values

//if we used scope then we shoud return it
const myNums1=[1,2,3,4,5,6,7,8]
const value1=myNums.filter((nums)=> {
    return nums>4
})
console.log(value1);

//same using forEach()

const newNums=[]
myNums1.forEach((val)=> {
    if(val>4){
        newNums.push(val)
    }
})
console.log(newNums);



const student =[
    {name:'rohit',depatment:'cse',course:'WebDev',passOutIn:2025},
    {name:'yuraj',depatment:'Mech',course:'AtoCad',passOutIn:2025},
    {name:'chaitynya',depatment:'cse',course:'python',passOutIn:2026},
    {name:'om',depatment:'Entc',course:'Electronic',passOutIn:2027},
    {name:'sumit',depatment:'Entc',course:'WebDev',passOutIn:2026},
]

const record= student.filter((stud)=>stud.depatment==='cse')
console.log(record)

const newRecord=student.filter((stud)=>{
    return stud.name==='yuraj'
})
console.log(newRecord[0].course)



