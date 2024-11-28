
let btn=document.querySelector("#btn1");

// btn.onclick=(e)=>{
//     console.log(e);

//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// let div=document.querySelector("div");
// div.onmouseover=(e)=>{
//     console.log("you are inside in div");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

//event listner

btn.addEventListener("click",()=>{
    console.log("button was clicked h1");
})
btn.addEventListener("click",()=>{
    console.log("button was clicked handle2");
})

const h3=()=>{
    console.log("button was clicked-h3");
}
btn.addEventListener("click",h3)
btn.addEventListener("click",()=>{
    console.log("button was clicked handle4");
})

btn.removeEventListener("click",h3);




//background color changing logic using event listner
let mode=document.querySelector("#mode");

let body=document.querySelector("body");

let currmode="light";
mode.addEventListener("click",()=>{
    
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})

