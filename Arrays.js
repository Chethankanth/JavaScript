const students = {

    
    subjects:["kannada","english","maths","social","science"]

};

let marks = [99,98,96,93,96];
let sum = 0;
for(let i = 0; i <=marks.length;i++){
    sum = sum+marks[i];
}
let avg = (sum/marks.length);
console.log(students.subjects);
console.log(`the avg marks of the student is: ${avg} `);

let items = [250,645,300,900,40];


let idx = 0;

for(let val of items){
    console.log(`value at indes ${idx} = ${val}`);
    let offer = items[idx]/10;
    items[idx]= items[idx]-offer;
    console.log(`the value to the item after the pricereduction is ${items[idx]}`);
    idx++;
    
}

for(let i = 0; i<items.length; i++){
    let offer = items[i]/10;
    // items[i]= items[i]-offer;
    items[i]-=offer;
    console.log(`the value after the price reduction is ${items[i]}`);
}
let a = [250,645,300,900,40];
console.log(a.splice(2,2,399,999));//here splice logic is first number repre the index to start from , second rep how many to splice,and next that many numbersust be added

let p = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

let removf =p.shift();//all ele shifts to left once
for(let i = 0; i<=p.length;i++){
    console.log(`the array after removing the first company from the arrat is ${p}`);
}
let ol = p.splice(2,1,"Ola");
for(let i = 0; i<=p.length;i++){
    console.log(`the arrat after removeing the uber and adding ola is:  ${p}`);
}
let ama = p.push("Amazon");
for(let i = 0; i<=p.length;i++){
    console.log(`the array after adding Amazon at the end is: ${p}`);
}
