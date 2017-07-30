var crystalNumber = Math.floor(Math.random() * 12) + 1;
function targetNumber() {
	return Math.floor(Math.random() * 120) + 19;
}
var counter = 0;

$("#number-to-guess").load(targetNumber());