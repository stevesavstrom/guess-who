console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow(){
loadImage();
}

function loadImage() {
	for(let person of people)
	$('#gameboard').append(`<img src="https://github.com/${person.githubUsername}.png?size=250">`)
}



