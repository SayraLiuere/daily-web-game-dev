let score = 0;
const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("click-btn");

clickButton.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
});
