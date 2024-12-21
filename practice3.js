alert("hello");
let name = prompt("hello!");
console.log(name);

let checkNumber= prompt("Enter the number to check wether it is divisible by 5 ot not");
if(checkNumber % 5 === 0){
    console.log(checkNumber, "is multiple of 5");

}

else{
    console.log(checkNumber, "is not the multiple of 5!");
}

// let a = 5;

// for(let i=1;i<=5;i++){
//     console.log(a);
    
// }
// //while loop

// let b = 1;
// while(b<=10){
//     console.log(b);
//     b++;
// }

// //do while loop
// let c = 20;
// do{
//     console.log("sfh;fh");
//     c++;
// }
// while(c=3);

//for-of-loop used for strings, arrays and objects;

// let str ="Pushpavathi C R";
// for(let i of str){
//     console.log("i=",i);
//     str++;
// }
// console.log("string size:",str);

//for in loop
let student = {
    name:"Sachin G C",
    age: 20,
    cgpa: 9.05,
    ispass : true,
};

for (let key in student){
    console.log("key: ",key,"value: ",student[key]);
}


// for(let i=0;i<=100;i++){
//     if(i%2==0){
//     console.log(i);

//     }
// };

// for(let i=0;i<=100;i++){
//     if(i%2!==0){
//     console.log(i);

//     }
// };

let gameNum = 45;
let userNum = prompt("Guess the game number: ");

do{
    userNum = prompt("you entered wrong number, Guess the right number again:");
}while(userNum != gameNum)
console.log("congragulation, you entered the right number");