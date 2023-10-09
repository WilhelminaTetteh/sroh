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
	{
		picturePath: 'resources/lion.jpg',
		soundPath: 'resources/lion_sound.mp3',
		answerOne: 'fish',
		answerTwo: 'lion',
	},
	{
		picturePath: 'resources/frog.jpg',
		soundPath: 'resources/frogg sound effect.mp3',
		answerOne: 'frog',
		answerTwo: 'lizard',
	},
	{
		picturePath: 'resources/snake.jpg',
		soundPath: 'resources/snake-sound.mp3',
		answerOne: 'snake',
		answerTwo: 'lion',
	},
	{
		picturePath: 'resources/horse.jpg',
		soundPath: 'resources/horses_sound.mp3',
		answerOne: 'goose',
		answerTwo: 'horse',
	},
];

// Target Answer buttons and change text
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');

function generateAnswers(num) {
	answer1.innerText = animalArray[num].answerOne;
	answer2.innerText = animalArray[num].answerTwo;
}

function generateRandomAnimal() {
	const imagedisplay = document.querySelector('.imagedisplay');
	// generate random image from array of objects
	let randomIndex = Math.floor(Math.random() * animalArray.length);
	// Target Image and change picture
	imagedisplay.src = animalArray[randomIndex].picturePath;

	// Generate Two answers for eaach image to pic from
	generateAnswers(randomIndex);
	// Target Audio and play animal sound
	document
		.getElementById('play')
		.addEventListener('click', function () {
			const audio = document.getElementById('audio');
			audio.src = animalArray[randomIndex].soundPath;
			audio.play();
		});

	// FIND CURRENT IMAGE IN WORDS
	currentImage = animalArray[randomIndex].picturePath
		.split('/')
		.pop()
		.split('.')[0];
	console.log(currentImage);
}

//Initial Generation
generateRandomAnimal();

// Target "Next Button" and generate a new image whenever it is clicked
const next = document.querySelector('.next-button');
next.addEventListener('click', generateRandomAnimal);

const chosenAnswers = document.querySelectorAll('.answer');
// ChosenAnswer is an array so we have to iterate
chosenAnswers.forEach((chosenAnswer) => {
	chosenAnswer.addEventListener('click', function () {
		const chosenText = chosenAnswer.innerText;
		if (chosenText === currentImage) {
			const feedback = document.getElementById('feedback');
			feedback.src = './resources/great-job.mp3';
			feedback.play();
			generateRandomAnimal();
			console.log('Equal');
		} else {
			const feedback = document.getElementById('feedback');
			feedback.src = './resources/uh-oh.mp3';
			feedback.play();

			console.log('Not Equal');
		}
	});
});

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
