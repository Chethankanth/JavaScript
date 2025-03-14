
const URL = "https://github.com/facts";

const getFacts = async ()=>{
    console.log("fetchig the data!..");
    let response = await fetch(URL);
    console.log("data fetched");
    console.log(response)
    let data = response.json();
    console.log(data);

}