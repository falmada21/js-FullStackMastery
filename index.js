// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let numbers = [4,8,3,6,2];
let result = numbers[1]*3;

console.log(result);


let tvshows =["Friends","Money Heist","The Office","Ozark"];
let thirdshow = "Imposters";
tvshows[2] = thirdshow;
console.log(tvshows)


let myStudies =["Math","Physics","Programming","Sociology"]
myStudies.pop();
console.log(myStudies);


//Favorite Food Variables
let food1 = "Tacos"
let food2 = "Burritos"
let food3 = "Hamburgers"
let food4 = "Pizza"
let food5 = "Sushi"

//array of favorite foods
let myFavoriteFood = [food1,food2,food3,food4,food5];

//get 3rd food 
console.log(myFavoriteFood[2]);
console.log("I love "+ myFavoriteFood[0]);

food3 = "Hot Dogs"; // play with vars
console.log(myFavoriteFood[2]); // Array value is still same
console.log(food3);
myFavoriteFood[2] = food3;  
console.log(myFavoriteFood[2]);
console.log(food3);
console.log(myFavoriteFood);