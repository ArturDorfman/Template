// JS task

// 1. Generate an array of random unique letters, quantity should be equal to 5. 
// (not manual, generate with JS).
// 2. Append generated array into html select as separate options.
// 3. When user select any option, show list of names from list.json file where 
// the first letter matches with selected option.
// 4. If no matches, show no matches result message

// NOTE: After each page refresh the array of unique letters must be different.

let uniqueLetters = [];
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charactersLength = characters.length;
for (let i = 0; i < 5; i++) {
	uniqueLetters.push(characters.charAt(Math.floor(Math.random() *
		charactersLength)));
}
console.log(uniqueLetters);
