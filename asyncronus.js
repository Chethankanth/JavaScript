let hello = ()=>{
    setTimeout(hello,4000);
    console.log("hllo world got print using the time delay of some miliseconds");

}

setTimeout(()=>{
    console.log("hello")
},5000);///same result


///call back function
function sum(a, b) {
    console. log (a + b);
    }
    function calculator(a, b, sumCallback) {
    sumCallback(a, b);
    }
    calculator(1,2,sum);


    function getData(dataId){
        setTimeout(()=>{
            console.log("data has been fetched within the time set period",dataId)
        },4000);
    }

    //////
    function getData1(dataId1,getSecondData){
        setTimeout(()=>{
            console.log("data has been fetched within the time set period",dataId1)
            if(getSecondData=true){
                getSecondData();
            }
        },4000);
    }

    getData1(1,()=>{
        getData1(2)
    });//we write arrow funciton insterd of writing getData(1,getData(2));



    //////Promise

    let promise =  new Promise((resolved,rejected)=>{
        console.log("this is without error which comes under resolved");
        rejected("this runs if some error occurs in the code")

    });


    ///function fetData(dataId, getNextData) { 
    // Returns a new Promise (asynchronous operation)
    return new Promise((resolve, reject) => { 
        
        // Simulates a delay of 5 seconds using setTimeout
        setTimeout(() => {  
            
            // Logs the dataId to the console
            console.log("data", dataId); 
            
            // Resolves the promise with the string "success"
            resolve("success"); 
            //it it dose not resolve it gives error with reject
            // reject("api gave error!..")///
            
            // If getNextData function is provided, call it
            if (getNextData) { 
                getNextData(); 
            }
            
        }, 5000); // 5000 milliseconds (5 seconds) delay
    });

    const fun = ()=>{
        return new Promise((resolve,reject)=>{
            console.log("i am a promise");
            resolve("success!..");
            //in case of rejected
            reject("error")
        });
    };

    let prom = fun();
    prom.then((res)=>{
        console.log("promise fullfilled!..",res);
    });

    prom.catch((err)=>{
        console.log("error occurred",err)
    })
    //// promise chaiing
    function getData3(dataId1){
        return new Promise((resolve,reject)=>{ setTimeout(()=>{
            console.log("data has been fetched within the time set period",dataId1)
            resolve("success!..")

        },4000);})
       
    }

    getData3(1).then((res)=>{
        console.log("data 1 retuened succesfully!..",res)
        return getData3(2);
    }).then((res)=>{
        console.log("data2 returned succesfully!..",res);
        return getData3(3);
    }).then((res)=>{
        console.log("Data 3 fetched succesfully",res)
    }).catch((err)=>{

        console.log("error occurred!#$...")

    });
    
    async function asys(){
        await getData3(4);
    }
