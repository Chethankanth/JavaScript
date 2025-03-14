// console.dir(document.body.childNodes[1]);

// console.dir(document.body.childNodes[3].innertext ="abcd");
// // ///
// let heading =document.getElementById("heading");
// console.dir(heading)//it should always be in .dir form because since it is in document
// // ///
// let classes= document.getElementsByClassName("heading1");
// console.dir(classes);
// console.log(classes);

// //querry selector

// let car = document.querySelector("p")//returns the first element
// console.log(car)
// // we can pass any paramater tags id class tag to it it automatically detects it;


// // to select multiple elements 
// let cam = document.querySelectorAll(".heading1");// accessing it with the help of class name we should use . in front of class name
// console.log(cam)

// let cars = document.querySelector("#heading")//accessing it by id we should use # in front of id name
// console.log(cars)
// ////////////practice questuin
// let h1= document.querySelector("#heading")
// console.dir(h1.innerText);

// h1.innerText = h1.innerText + " changed using the inner Text property";


// //for div

// let shiv = document.querySelectorAll(".box");
// // shiv[0].innerText = "this is an unique text added to the first div";
// // shiv[1].innerText = "this is an unique text added to the second div";
// // shiv[2].innerText = "this is an unique text added to the third div";
// let indx = 1;
// for(div in shiv){
//     div.innerText = `new unique values ${indx}`;
//     indx++; 
// }

// let para = document.querySelector("p");
// console.log (para.setAttribute("class", "newclass"));//sets the attribute to new attribut like class, id , name etc


// let nwbtn = document.createElement("button");
// nwbtn.innerText="click-me!";
// nwbtn.style.color= "white";
// nwbtn.style.backgroundColor = "red";
// console.log(nwbtn);
// let div = document.querySelector("div");
// div.append(nwbtn);

// div.after(nwbtn);
// div.before(nwbtn);
// div.prepend(nwbtn);

// let bt = document.createElement("button");
// bt.style.color="white";
// bt.style.backgroundColor="red";
//  let body = document.querySelector("body");
//  body.prepend(bt);

let para = document.querySelector("p");
// para.setAttribute("class","newclass")
para.classList.add("oldclass");//class list is used to list the nuber of classes in javascript;

para.classList.remove("newclass");



