const company = {
    calc() {
        console.log("tax is 10%");
    }
};

const karanArjun = {
    saler: 50000
};

// Setting the prototype correctly
Object.setPrototypeOf(karanArjun, company);

karanArjun.__proto__.company;//this way also we can set the prototype 

// Accessing inherited method
karanArjun.calc(); // Output: tax is 10%

const karanArjun1 = {
    saler: 50000,  // Added comma
    calc() {
        console.log("if two objects have the same method, it accesses that object's method");
    }
};

// Calling karanArjun1.calc() will use its own method
karanArjun1.calc(); // Output: "if two objects have the same method, it accesses that object's method"