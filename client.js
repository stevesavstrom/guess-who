console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow(){
loadImages();
randomPerson();
}

// Load images on DOM when page loads
function loadImages() {
	for(let person of people)
	$('#gameboard').append(`<img src="https://github.com/${person.githubUsername}.png?size=250">`)
}

// Random number function (provided)
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
console.log(randomNumber(0, 14));

function randomPerson(){
// generate random person and append into #newName
$('#randomName').append(people[randomNumber(0, 14)].name)
}


