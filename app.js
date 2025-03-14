class parent{

    constructor(){
        
    }
    hello(){
        console.log("this is form parent class!..")
    }
};

class child extends parent{
    how(){
        console.log("this is from child class!..")
    }
   
}

const myobj= new child();

myobj.hello();
myobj.how();

////

class Person {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(branch) {
        super(); // Invoke parent class constructor
        this.branch = branch;
    }

    work() {
        super.eat();//in this way we can access the patent class methods by super keyword or by creating instances and calling it
        console.log("Solve problems, build something");
    }
}

// Creating an instance of Engineer
let engObj = new Engineer("chemical engg");

// Calling methods
console.log(engObj.species); // Output: homo sapiens
engObj.eat(); // Output: eat
console.log(engObj.branch); // Output: chemical engg
engObj.work(); // Output: Solve problems, build something