//singolton object   const user = Object()
// non singolton     const user = {} 

const user1 = {}
user1.name='sumit'
user1.email='sumit@gmail.com'
user1.city='pandharpur'

console.log(user1);

//nested object

const college ={
    name:'sknscoe',
    placed:'korti',
    department:{
        first:'cse',
        second:'entc',
        third:'mech'
    }
}

console.log(college.name);
console.log(college.department);
console.log(college.department.first);

//merging objects

const obj1={1:'apple',2:'mango'}
const obj2 ={3:'maruti',4:'scarpio'}
const obj3 ={obj1,obj2}
console.log(obj3);

//another aproch
const obj4= Object.assign({},obj1,obj2)
console.log(obj4);

//sprede oparator
const obj5 ={...obj1,...obj2}
console.log(obj5);

//array of object

const user =[
    {
        email:'abc@gmail.com',
        name:'om'
    },
    {
        age:21
    },
    {
        isLoggedIn:true
    }
]
console.log(user[0]);
console.log(user[2]);

//accessing key and values from object

console.log(Object.keys(obj5));
console.log(Object.values(obj5));

// Example

const mySym =Symbol('ket1')
const users ={
    name:'rohit',
    age:'21',
    Email:'rc123@gmail.com',
    IsLoggedIn:true,
    LoggedInDays:['monday','wednesday'],
    [mySym]:'mykey'
}

console.log(users.Email);
//another aproch to access
console.log(users['Email']);
console.log( typeof users[mySym]);

console.log(users)
users.Email ='abc@gmail.com'
console.log(users);

users.greetings = function(){
    console.log('hello user')
}

users.greetings2 = function(){
    console.log(`hello user: ${this.name}`)
}

console.log(users.greetings());
console.log(users.greetings2());






