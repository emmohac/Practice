let min = 1,
	max = 10,
	winningNum = 2,
	guessLeft = 3;

const game = document.querySelector("#game"),
	minNum = document.querySelector(".min-num"),
	maxNum = document.querySelector(".max-num"),
	guessButton = document.querySelector("#guess-value"),
	guessInput = document.querySelector("#guess-input"),
	message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessButton.addEventListener("click", () => {
	let guess = parseInt(guessInput.value);
	if (isNaN(guess) || guess < min || guess > max) {
		setMessage("somemessage", "red");
	} else if (guess === winningNum) {
		guessInput.disabled = true;
		guessInput.style.border = "1.5px solid lightgreen";
		setMessage("woohoo you win", "green");
	} else {
	}
});

function setMessage(str, color) {
	message.style.color = color;
	message.textContent = str;
}
