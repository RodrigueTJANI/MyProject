import readlineSync from "readline-sync";

let userName = readlineSync.question("What is your name?");
console.log("Hi" + userName + "!");

let favFood = readlineSync.question("What is your favorite food?", {
  hideEchoBack: true,
});

console.log("Oh," + userName + "loves" + favFood + "!");

let birthdayDate = readlineSync.question("When were you born?");
console.log(birthdayDate);

let cityOfBirth = readlineSync.question("In which city do you live now?");
console.log(cityOfBirth);

let livedCity = readlineSync.question("In which city do you live now?");
//console.log(livedCity);

let currYear = readlineSync.question("what is the current year?");
console.log(currYear);

var usedName = "Sandy";
let birthdayYear = 1995;
let bornCity = "London";
let liveCity = "Berlin";
let currentYear = "2023";

/* console.log(
  `Hello! my name is ${usedName}. I was born in ${birthdayYear} in ${bornCity} and i'm ${
    currentYear - birthdayYear
  } old. I live in ${liveCity}`
); */

console.log(
  `Hello! my name is ${usedName.toUpperCase()[0]}${usedName
    .toLowerCase().slice(1)}. I was born ${currYear - birthdayYear} years ago in ${
    cityOfBirth.toUpperCase()[0]
  }${cityOfBirth.toLowerCase().slice(1)}. Now i live in ${
    liveCity.toUpperCase()[0]
  }${liveCity.toLowerCase().slice(1)} `
);
