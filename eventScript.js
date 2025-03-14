let btn  = document.querySelector("button");

// btn.onclick =()=>{
//     console.log("you have ckicked once");
// }

let div = document.querySelector("div");

// div.onmouseover = ()=>{
//     console.log("you are hovering on  the div part");
// }//handling the events in the js part itself without writing it in the html part


//event object

// btn.onclick = (e)=>{
//     console.log(e);
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)
// }
// e is the event object here


///// handeling events using event listiners

// btn.addEventListener("click",()=>{
//     console.log("button was clicked handler-1")

// });

// btn.addEventListener("click",()=>{
//     console.log("button was clicked handler-2")

// });
// const handler3 =()=>{
//     console.log("button was clicked handler-3")

// };
// btn.addEventListener("click",()=>{
//     console.log("button was clicked handler-4")

// });
// btn.removeEventListener("click",handler3);

let body = document.querySelector("body");
let mode = "light";
btn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.remove("light")
        body.classList.add("dark")//this is done using class list option using the style.css
        console.log(mode);
    }
    else if(mode==="dark"){
        mode="light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.remove("dark")
        body.classList.add("light")//this is done using class list option using the style.css
        console.log(mode);
    }
    
});


div.onmouseover=(eve)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}