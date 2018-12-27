
var isGameActive = false;
var playerTurn = false;
var simonSequence = [];
var playerInput = [];

var greenBeep = new Audio("./assets/sound/simonGreenSound.mp3");
var redBeep = new Audio("./assets/sound/simonRedSound.mp3");
var yellowBeep = new Audio("./assets/sound/simonYellowSound.mp3");
var blueBeep = new Audio("./assets/sound/simonBlueSound.mp3");

var levelCounter = document.getElementById("score-display");

const gameOverlay = document.getElementById("game-overlay");
const playButton = document.getElementById("play-btn");
const restartButton = document.getElementById("restart-btn");
const greenButton = document.getElementById("simon-green");
const redButton = document.getElementById("simon-red");
const yellowButton = document.getElementById("simon-yellow");
const blueButton = document.getElementById("simon-blue");
const gameColors = ["", "green", "red", "yellow", "blue"];

// Button event listeners
playButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetGame);
greenButton.addEventListener("click", greenPad);
redButton.addEventListener("click", redPad);
yellowButton.addEventListener("click", yellowPad);
blueButton.addEventListener("click", bluePad);

// Start game
function startGame(){
    isGameActive = true;
    gameOverlay.classList.add("game-overlay-hidden");
    playButton.classList.add("button-hide");
    restartButton.classList.remove("button-hide");
    levelCounter.innerText = "01";
    addSimonSequence();
}

// Reset game
function resetGame(){
    document.location.reload();
}

// Play simon sequence
function playPattern(counter){
    setTimeout(function(){
        if(simonSequence[counter] == "green"){
            greenPad();
        } else if(simonSequence[counter] == "red"){
            redPad();
        } else if(simonSequence[counter] == "yellow"){
            yellowPad();
        } else if(simonSequence[counter] == "blue"){
            bluePad();
        }
        counter++;
        if(counter < parseInt(levelCounter.innerText)){
            playPattern(counter);
        }else{
            console.log("Players turn");
            playerTurn = true;
        }
    }, 1500);
}

// Game handler - if correct input increment level otherwise show a game over message
function checkInput(){
    if(parseInt(levelCounter.innerText) < 20){
        if(playerInput.length == parseInt(levelCounter.innerText)){
            if(correctInput(simonSequence, playerInput) == true){
                levelCounter.innerText = formatVal(parseInt(levelCounter.innerText) + 1);
                playerTurn = false;
                playerInput = [];
                playPattern(0);
            }else{
                gameOverlay.classList.remove("game-overlay-hidden");
                document.getElementById("game-overlay-message").innerText = `Game Over! Better Luck Next Time. Click 'Restart' to play again.`;
            }
        }
    } else if(playerInput.length == parseInt(levelCounter.innerText) && parseInt(levelCounter.innerText) == 20){
        if(correctInput(simonSequence, playerInput) == true){
            gameOverlay.classList.remove("game-overlay-hidden");
            document.getElementById("game-overlay-message").innerText = `Well Done! You Beat Simon. Click 'Restart' to play again.`;
        }else{
            gameOverlay.classList.remove("game-overlay-hidden");
            document.getElementById("game-overlay-message").innerText = `Game Over! Better Luck Next Time. Click 'Restart' to play again.`;
        }
    }
}

// Check users input against simon sequence and return true if correct or return false if incorrect
function correctInput(simonSequence, userInput){
    for(var i=0; i<userInput.length; i++){
        if(simonSequence[i] != userInput[i]){
            return false;
        }
    }

    return true;
}

// Add to simon sequence - max of 20 entries
function addSimonSequence(){
    var seqCandidate = "";

    for(var i=0; i<20; i++){
        seqCandidate = generatePattern();

        while(isUnique(simonSequence, seqCandidate) == false){
            seqCandidate = generatePattern();
        }
        console.log(seqCandidate);
        simonSequence.push(seqCandidate);
    }
    playPattern(0);
}

// Helper function used to format values
function formatVal(val){
    if(parseInt(val) < 10){
        return "0" + val;
    }else{
        return val;
    }
}

// Randomly generate a colour 
function generatePattern(){
    var randomNum;
    randomNum = Math.floor(Math.random() * 4) + 1;

    return gameColors[randomNum];
}

// Checks if last 3 entries of simon sequence are the same - enforces 3 same consecutive colour rule
function isUnique(sequence, testVal){
    var seqLength = sequence.length;

    if(sequence[seqLength - 1] == testVal && sequence[seqLength - 2] == testVal &&  sequence[seqLength - 3] == testVal){
        return false;
    }else{
        return true;
    }
}

// Handler for green simon button
function greenPad() {
    greenButton.style.backgroundColor = "rgb(150, 255, 150)";
    setTimeout(function() {
        greenButton.style.backgroundColor = "green";
    }, 1000);
    greenBeep.play();
    if(isGameActive & playerTurn){
        playerInput.push("green");
        checkInput();
    }
}

// Handler for red simon button
function redPad() {
    redButton.style.backgroundColor = "rgb(255, 150, 150)";
    setTimeout(function() {
        redButton.style.backgroundColor = "red";
    }, 1000);
    redBeep.play();
    if(isGameActive & playerTurn){
        playerInput.push("red");
        checkInput();
    }
}

// Handler for yellow simon button
function yellowPad() {
    yellowButton.style.backgroundColor = "rgb(255, 255, 150)";
    setTimeout(function() {
        yellowButton.style.backgroundColor = "yellow";
    }, 1000);
    yellowBeep.play();
    if(isGameActive & playerTurn){
        playerInput.push("yellow");
        checkInput();
    }
}

// Handler for blue simon button
function bluePad() {
    blueButton.style.backgroundColor = "rgb(150, 150, 255)";
    setTimeout(function() {
        blueButton.style.backgroundColor = "blue";
    }, 1000);
    blueBeep.play();
    if(isGameActive & playerTurn){
        playerInput.push("blue");
        checkInput();
    }
}
  
