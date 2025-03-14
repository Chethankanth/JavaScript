const numb = [1,2,3,4,5];

const nwnumb= numb.reduce((prev,curr)=>{
    return prev+curr;
});

console.log(nwnumb);

///returns largest of two numbers in array

const larg = numb.reduce((prev,curr)=>{
    return prev>curr? prev : curr;
});
 console.log(larg);


 let n = prompt("enter the number or emements which must be there in the array: ");
 let ars=[];
 let init = 0;
 let res;
 for(let i=0;i<=n;i++){
    ars[i-1]=i;
    
 }
 console.log(ars);

 let sum = ars.reduce((prev,curr)=>{
    return prev+curr;
 });

 console.log(sum);

 let pro = ars.reduce((prev,curr)=>{
    return prev*curr;
 });
 console.log(pro);


