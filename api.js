
const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async ()=>{
    console.log("fetchig the data!..");
    let response = await fetch(URL);
    console.log("data fetched");
    console.log(response)

}