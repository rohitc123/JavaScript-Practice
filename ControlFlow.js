
const num=1000

if(num>500){
    console.log(`the number ${num} is greater than 500`);
}

// simple voting code

const age =25
let person='Rohit'
if(age>18) {
    console.log(`${person} you are eligeble for voting `);
} else{
    console.log(`${person} you are not eligeble for voting `);
}


//cheaking first class,good, average, low,Fail score 


const yourMark =10

if(yourMark>180){
    console.log('your Grade : First Class');
} else if(yourMark>150 && yourMark<180 ){
    console.log('your Grade:Good');
} else if(yourMark>100 && yourMark<150){
    console.log('your Grade:Average');
} else if(yourMark>50 && yourMark<100){
    console.log('your Grade:low');
} else{
    console.log('your Grade:Fail');
}


// switch

const month =1

switch (month) {
    case 1:
        console.log('Janeuary');
        break;
    case 2:
        console.log('february');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('may');
        break;
    case 6:
        console.log('june');
        break;

    default:
        console.log('defalt case');
        break;
}


