//for each looop is only strictly used for arrays cannot be used for strings
// for each loop is also heigher order function/meathod
let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val){
    console.log(val);

});////it uses functions as its parameters also known as callBackFunctions


///using arrow key

let arrs=["chethan","sachin","pratham","rame gowda","shivmani"];

arrs.forEach((st,index,arrs)=>{
    console.log(st.toUpperCase(),index,arrs)
});//converts the given string to uppecase and gives the output in order and with its index number


//practice question

const nums=[1,2,3,4,5,6,7];

nums.forEach((val)=>{
    console.log(val*val);
});


////////
let num=[22,43,52,76,43];
let calculateSquare = (num)=>{
    console.log(num*num);
}

num.forEach(calculateSquare);