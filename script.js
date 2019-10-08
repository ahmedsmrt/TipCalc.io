/*
var firstName = 'Ahmed';
console.log(firstName);

var lastName = 'Gasim';
var age = 27;

var fullAge = true;
console.log(fullAge);
*/

// var firstName = 'Ahmed';
// var age = 27;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = 'false';

// console.log(`${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}.`);

// // Variable Mutation

// age = 'twenty seven';
// job = 'Uber Driver';
// alert(`${firstName} is a ${age} year old ${job}. Is he married? ${isMarried}.`);

// var lastName = prompt('What is his last Name?');
// alert(`${firstName}'s last name is ${lastName}.`);

// Coding Challenge
// BMI = mass / height^2

// var personMass1, personMass2, personHeight1, personHeight2, person1, person2, person1Bmi, person2Bmi;
// alert('Welcome to my lame BMI calculator!');
// person1 = prompt('First Person: What is your name?');
// personMass1 = prompt('What is your weight in kg?');
// personHeight1 = prompt('What is your Height in meters?');
// alert('Storing information for first person...');
// person2 = prompt('Second Person: What is your name?');
// personMass2 = prompt('What is your weight in kg?');
// personHeight2 = prompt('What is your Height in meters?');
// alert('Storing information for second person...');
// alert('SQUANCHING NUMBERS...COMPARING RESULTS...ONE OF YOU MIGHT BE FAT!');
// person1Bmi = (personMass1 / (personHeight1*personHeight1));
// person2Bmi = (personMass2 / (personHeight2*personHeight2));
// if(person1Bmi > person2Bmi) {
//     alert(`${person1} has a higher BMI than ${person2} by ${person1Bmi - person2Bmi}!`);
// } else if (person2Bmi > person1Bmi) {
//     alert(`${person2} has a higher BMI than ${person1} by ${person2Bmi - person1Bmi}!`);
// } else if (person2Bmi = person1Bmi) {
//     alert(`You two are equally as chubby!`);
// }

// var firstName = 'Ahmed';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(`${firstName} is married!`);
// } else {
//     console.log(`${firstName} will hopefully get married soon!`);
// }

// var isMarried = true;
//     if (isMarried) {
//         console.log(`${firstname} is married!`);
//     } else {
//         console.log(`${firstname} `)
//     }

// var firstName = 'Ahmed';
// var age = 33;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';

// var job = 'driver';
// switch (job) {
//     case 'teacher':
//         console.log(`${firstName} teaches kids how to code.`);
//         break;
//     case 'driver': 
//         console.log(`${firstName} drives an uber in Berlin.`);
//         break;
//     case 'stripper':
//         console.log(`${firstName} likes to twerk on a tueday.`); 
//         break;
//     case 'artist':
//         console.log(`${firstName} paints surreal art for edm masters.`);
//         break;
//     default:
//         console.log(`${firstName} does nothing with his bum ass!`);    
// }

// var team1, team2, team1Scores, team2Scores, team1Avg, team2Avg, myFunction, team1Length;

// team1 = 'Sixers';
// team2 = 'Warriors';
// team1Scores = [123, 89, 307, 144];
// team1Length = team1Scores.length;
// team2Scores = [93, 74, 90, 203];
// team1Avg = Math.round(team1Scores.reduce(myFunction));
// team2Avg = Math.round(team2Scores.reduce(myFunction));
// function myFunction(total, value) {
//     return ((total + value)/team1Length);
// }
// team1Avg >= team2Avg ? console.log(`The ${team1} are a way better team for scoring an average of ${team1Avg} PPG this season, while ${team2} only scored ${team2Avg}!`) : console.log(`The ${team2} are a way better team for scoring an average of ${team2Avg} PPG this season, while the ${team1} only scored ${team1Avg}`);

// console.log(team1Avg);
// console.log(team2Avg);

// function calculateAge(birthYear) {
//     return 2019 - birthYear;
// }
// var ageAhmed = calculateAge(1992);

// console.log(ageAhmed);

// function yearsUntilRetiremnet(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     retirement > 0 ?  console.log(`${firstName} retires in ${retirement} years!`) :  console.log(`${firstName} is already retired!`);
// }

// yearsUntilRetiremnet(1932, 'Shannon');

// Function Statements and Expressions
// Manthatburritowasgoodaf19!

// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return `${firstName} teaches kids how to code`;
//         case 'driver':
//             return `${firstName} drives uber for a living nigga`;
//         case 'designer':
//             return `${firstName} designs beautiful websites`; 
//         default: 
//             return `${firstName} does something else`;   
//         }
// }

// console.log(whatDoYouDo('designer', 'Ahmed'));

// Arrays


// let h1 = document.querySelector('#h1');
// let h1Color = prompt("What color do you want your text?");
// h1.style.color = h1Color;
// let h1Text = prompt("What would you like this website to say?");
// h1.innerHTML = `${h1Text} ${Date()}`;


let amt1 = document.querySelector('#amount1');
let btn1 = document.querySelector('#submt')
btn1.addEventListener(onclick(), {

});