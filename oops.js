
//Objects - it is an entity which having properties and methods.
const employee={
    calTax() {
        console.log("tax rate is 10%");
    }
}


//classes - it is blueprint of an object.

class car{
    constructor(brand,mialage){
        console.log("new constructor");
        //initialization
        this.brand=brand;
        this.mialage=mialage;
    }
    start(){
        console.log('start')
    }
    stop(){
        console.log('end')
    }
    setBrand(brand){
        this.brand=brand;
    }
}

let fortuner=new car('fortuner',12);
console.log(fortuner)
let kia=new car('maruti',15);
console.log(kia)

//inheritance - passing down properties and method from parent class to child class using extend keyword.

class parent{
    hello(){
        console.log('hello')
    }
}

class child extends parent{

}

let obj=new child();


//method overriding - if child and parent have same method ,child method run first.

//super keyword - it is used to call the constructor of its parent class to access the parent's properties and methods.


class Person{
    constructor(name){
        this.spacies='homo sapiens';
        this.name=name;
    }
    eat(){
        console.log('eat');
    }
    work(){
        console.log('no work')
    }
}

class Engineer extends Person{
    constructor(branch,name){
        super(name);
        this.branch=branch;
    }
    work(){
        super.eat()
        console.log('build somthing new')
    }
}

let rohitEn=new Engineer('cse','rohit');






