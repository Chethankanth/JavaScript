
const URL = "https://official-joke-api.appspot.com/random_ten";

let msg = document.querySelector(".myclass");
const btn = document.querySelector("#mbutton");



const getFacts = async ()=>{
    console.log("fetchig the data!..");
    let response = await fetch(URL);//fetch api calls and fetches the data;
    console.log("data fetched");
    console.log(response)//gets response
    let data = response.json();//json mekes it to redable formate
    msg.innerText = data[0];


}

btn.addEventListener("click",getFacts());