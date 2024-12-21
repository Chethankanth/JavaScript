//generally we define the objects with const datatype;

const student = {
    fullName:"Pushpavathi C R",//string
    AGE:20,//intiger
    CGPA:8.20,//float
    isPass: true,//bool datatype
};

student["fullName"];
console.log(student);
console.log(student["fullName"]);//double cotes is essential
console.log(student.CGPA);
student["name"]="Ashok.G.K";//Can also re assign the valuse to the previously assigned variables

const fullName="Chethan Kanth";
console.log(student.fullName);
///"let" can be updated nut "constant" cannot be updated.