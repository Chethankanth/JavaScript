let foodItems = [ "potato","bread","biscate","chips","tomato"];
foodItems.push("burger","pizza","biryani");
console.log(foodItems);
foodItems.pop();
console.log(foodItems);
console.log(foodItems.toString());

let marvel_heros = ["thor","ironman","antman"];
let Dc_Heros = ["superman","batman","flash","wonderwomen"];
let Indian_Heros = ["shaktiman","Krish"];
let conc = marvel_heros.concat(Dc_Heros,Indian_Heros);
console.log(conc);
console.log(marvel_heros.unshift("captonAmerica"));
console.log(marvel_heros.shift());

console.log(Dc_Heros.slice(1,3));
