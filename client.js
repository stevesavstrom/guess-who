console.log('Here are all the available people:', people);

// Needed to declare globally to help with clickPhoto() comparison
let randNum = -1;

$(document).ready(readyNow);

function readyNow(){
shuffleArray(people);
loadImages();
randomPerson();
// Click event listener
$("#gameboard").on("click", "div", clickPhoto);
} // end readyNow

// Load images on DOM when page loads
function loadImages() {
	// loop through data.js array and append each photo by Github username to DOM
	for(let person of people)
	$('#gameboard').append(`<div class="grid" id="${person.name}"><img class="profile" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}"></div>`)
} // end loadImages

// Random number function (provided)
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber

// Generate random person and append into #randomName
function randomPerson(){
	randNum = randomNumber(0, people.length - 1);
	$('#randomName').append(people[randNum].name);
	console.log(randNum);
} // end randomPerson

// Guess and check by clicking on the photo
function clickPhoto(){
	// comparing id name to random person
	if(this.id === people[randNum].name){
		alert("Nice job! You found me!");
	} else {
		alert("Try again!");
	}
} // end clickPhoto

// Shuffle array
function shuffleArray(array){
	let currentIndex = array.length,  randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
	return array;
}

// Source for shuffleArray:
// I used the Fisher-Yates shuffle and this function:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array



