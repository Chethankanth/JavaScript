
// function firstFunction(){
// console.log("welcome to javascript");
// console.log("welcome to angularjs");
// console.log("welcome james bond");
// console.log("welcome  007");
// }

// firstFunction();
// firstFunction();

// function SecondFunction(msg){
//     console.log(msg);
// }
// let msg;
// SecondFunction("hello james bond");


// function calcFunction() {
//     let results;
//     console.log("Select the operations you want to do");
//     let inval = prompt("Select 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division");


//     if (inval == 1) {
//         results = fnum + secondnum;
//         return results;
//     } else if (inval == 2) {
//         results = fnum - secondnum;
//         return results;
//     } else if (inval == 3) {
//         results = fnum * secondnum;
//         return results;
//     } else if (inval == 4) {
//         if (secondnum !== 0) {
//             results = fnum / secondnum;
//             return results;
//         } else {
//             console.log("Division by zero is not allowed.");
//             return 0;
//         }
//     } else {
//         console.log("Invalid choice!...");
//         return 0;
//     }

//     // console.log("The result is: " + results);
// }
// let fnum = parseFloat(prompt("Enter the first number:"));
//     let secondnum = parseFloat(prompt("Enter the second number:"));

// let val = console.log(calcFunction(fnum,secondnum));


// ////arrow functions//////
// ////    //////     /////
// const addition = (a , b)=>{
//     return(a+b);

// }

// const subtraction = (a, b)=>{
//     return(a-b);
// }

// let add = addition(10,2);
// console.log(add);
// const sub = subtraction(10,5);
// console.log(sub);
// ///////////////////

function countVowels(str){
    let count =0;
    for(const char of str){
        console.log(str);
        if(char == "a"|| char =="e"||char =="i"||char =="o"||char =="u"){
            count++
            
        }
    }
    console.log(count);
}
countVowels(prompt("enter the what u want to entere to find the number of vowels presen in it:"));

/////    /////// /////
/////          ////   
