// create letters array
const letters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

// create numbers array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 9];

// create lower case latters from Letters array
const lowerCaseLetters = letters.map(letter => letter.toLowerCase());
// create upper case latters from Letters array
const upperCaseLetters = letters.map(letter => letter.toUpperCase());

// create a function to randomize array's items position
const shuffleArray = arr => {
	// returns a copy of the array that was passed as argument with random positioned.
	return [...arr].sort(() => Math.random() - 0.5);
};

// create random upper case letters array
const randomUpperCaseLetters = shuffleArray(upperCaseLetters);
// create random lower case letters array
const randomLowerCaseLetters = shuffleArray(lowerCaseLetters);
// create random numbers array
const randomNumbers = shuffleArray(numbers);

// generate id
const generateId = () => {
	// get four upper case letter from randomUpperCaseLetters
	const fourUpperCaseLetters = randomUpperCaseLetters.slice(0, 4).join('');
	// get four lower case letter from randomLowerCaseLetters
	const fourLowerCaseLetters = randomLowerCaseLetters.slice(0, 4).join('');
	// get four numbers from randomNumbers
	const fourNumbers = randomNumbers.slice(0, 4).join('');

	// get two upper case letter from randomUpperCaseLetters
	const twoUpperCaseLetters = randomUpperCaseLetters.slice(0, 2).join('');
	// get two lower case letter from randomLowerCaseLetters
	const twoLowerCaseLetters = randomLowerCaseLetters.slice(0, 2).join('');
	// get four numbers from randomNumbers
	const twoNumbers = randomNumbers.slice(0, 2).join('');

	// return string containing twoNumbers twoLowerCaseLetters fourUpperCaseLetters fourNumbers twoUpperCaseLetters fourLowerCaseLetters twoNumbers
	return `${twoNumbers}${twoLowerCaseLetters}${fourUpperCaseLetters}${fourNumbers}${twoUpperCaseLetters}${fourLowerCaseLetters}${twoNumbers}`;
};

// unique id
export const uid = () => {
	/**
	 * returns a copy of randomized generateId
	 * the reason i did this is because
	 * if you invoke generateId() more than once
	 * it will return the same id each time you invoke generateId more than once
	 */

	return shuffleArray(generateId().split('')).join('');
};
