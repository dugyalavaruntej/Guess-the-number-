document.getElementById("guessButton").addEventListener("click", () => {
    const gamenum = 7;
    const usernum = Number(document.getElementById("userGuess").value);
    const message = document.getElementById("message");

    if(usernum === gamenum) {
        message.style.color = "#28a745";  // Change message color to green
        message.textContent = "Congratulations, you guessed the right number!";
    } else {
        message.style.color = "#ff0000";  // Keep message color red
        message.textContent = "Wrong number, try again!";
    }
});
