// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Diet Vanilla Coke From Friendlys ";
favDrink = favDrink.trim();
console.log(favDrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let oneWord = "There was a time apple was a delicacy";

let fruit = oneWord.includes("apple");
console.log(fruit);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

const rockPaperScissors = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

const takeAnArr = (arr) => {};
