
var isGameActive = false;

const playButton = document.getElementById("play-btn");
const restartButton = document.getElementById("restart-btn");
const greenButton = document.getElementById("simon-green");
const redButton = document.getElementById("simon-red");
const yellowButton = document.getElementById("simon-yellow");
const blueButton = document.getElementById("simon-blue");
const gameColors = ["", "green", "red", "yellow", "blue"]
const simonSounds = {green: "./assets/sound/simonGreenSound.mp3",
                    red: "./assets/sound/simonRedSound.mp3",
                    yellow: "./assets/sound/simonYellowSound.mp3",
                    blue: "./assets/sound/simonBlueSound.mp3"};
const displayCounter = document.getElementById("score-display");


playButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetGame);
greenButton.addEventListener("click", playSound);
redButton.addEventListener("click", playSound);
yellowButton.addEventListener("click", playSound);
blueButton.addEventListener("click", playSound);

function startGame(){
    isGameActive = true;
    playButton.classList.add("button-hide");
    restartButton.classList.remove("button-hide");
    displayCounter.innerText = "1";
}

function resetGame(){
    document.location.reload();
}

function playSound(){
    if(isGameActive == true){
        switch(this.id){
            case "simon-green":
                var test = new Audio(simonSounds["green"]);
                test.play();
                break;
            case "simon-red":
                var test = new Audio(simonSounds["red"]);
                test.play();
                break;
            case "simon-yellow":
                var test = new Audio(simonSounds["yellow"]);
                test.play();
                break;
            default:
                var test = new Audio(simonSounds["blue"]);
                test.play();
                break;
        }
    }
}
