// BUTTON ANIMATION
var animateButton = function (e) {
	e.preventDefault;
	//reset animation
	e.target.classList.remove('animate');

	e.target.classList.add('animate');
	setTimeout(function () {
		e.target.classList.remove('animate');
	}, 700);
};

var bubblyButtons = document.getElementsByClassName('bubbly-button');
var buttonLink = document.getElementsByClassName('button-link');
for (var i = 0; i < bubblyButtons.length; i++) {
	bubblyButtons[i].addEventListener(
		'mouseover',
		animateButton,
		false
	);
}
for (var i = 0; i < buttonLink.length; i++) {
	buttonLink[i].addEventListener('dblclick', animateButton, false);
}

// ARRAY OF OBJECTS

const animalArray = [
	{
		picturePath: './resources/cat.jpg',
		soundPath: 'resources/cat_sound.mp3',
		answerOne: 'dog',
		answerTwo: 'cat',
	},
	{
		picturePath: './resources/dog.jpg',
		soundPath: 'resources/dog_sound.mp3',
		answerOne: 'dog',
		answerTwo: 'bird',
	},
	{
		picturePath: 'resources/elephant.jpg',
		soundPath: 'resources/elephant_sound.mp3',
		answerOne: 'giraffe',
		answerTwo: 'elephant',
	},
];

// Target Image and change picture
const imagedisplay = document.querySelector('.imagedisplay');
imagedisplay.src = animalArray[2].picturePath;

// Target Answer buttons and change text
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
answer1.innerText = animalArray[2].answerOne;
answer2.innerText = animalArray[2].answerTwo;

// Target Audio and play animal sound
// GET SOUND TO PLAY
const audio = new Audio();
audio.src = animalArray[2].soundPath;

const play = document.querySelector('.play');
const att = document.createAttribute('onClick');
att.value = 'audio.play();';
play.setAttributeNode(att);

console.log(play);
