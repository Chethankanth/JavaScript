const profile={
    UserName:"Chethan_Kanth",
    isFollow: false,
    followers: 123,
    following:123,
};
console.log(profile);
console.log(typeof profile.followers);


/*javascript has uniary opperatior they are:
increment and decrement*/

let a = 5

console.log(a+=5);

age = 18
if(age>=18){
    console.log("eligible to vote");
}

else{
    console.log("you are too young to vote!..");
}
let Gage= 25

let result=Gage>18 ? "adult":"notadult";
console.log(result);

let Gaage= 25

Gaage>18 ? console.log("adult"):console.log("notadult");
//Turnary Operators
// works on three opperator

//"===" is the stricter version of "==" to opperator
// where "==" operator assume same value integer to string
//eg 5=="5" gives true which is not true so to avoide this we use "==="