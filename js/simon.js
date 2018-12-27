
var isGameActive = false;
var playerTurn = false;
var simonSequence = [];
var playerInput = [];

// Audio for each simon button
var greenBeep = new Audio("./assets/sound/simonGreenSound.mp3");
var redBeep = new Audio("./assets/sound/simonRedSound.mp3");
var yellowBeep = new Audio("./assets/sound/simonYellowSound.mp3");
var blueBeep = new Audio("./assets/sound/simonBlueSound.mp3");

var levelCounter = document.getElementById("score-display");

const gameOverlay = document.getElementById("game-overlay");
const startButton = document.getElementById("play-btn");
const restartButton = document.getElementById("restart-btn");
const greenButton = document.getElementById("simon-green");
const redButton = document.getElementById("simon-red");
const yellowButton = document.getElementById("simon-yellow");
const blueButton = document.getElementById("simon-blue");
const gameColors = ["", "green", "red", "yellow", "blue"];

// Button event listeners
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", resetGame);
greenButton.addEventListener("click", greenPad);
redButton.addEventListener("click", redPad);
yellowButton.addEventListener("click", yellowPad);
blueButton.addEventListener("click", bluePad);

// Start game
function startGame(){
    isGameActive = true;
    gameOverlay.classList.add("game-overlay-hidden");
    startButton.classList.add("button-hide");
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
    // using 'setTimeout' to play a sequence once every 1.5 seconds
    setTimeout(function(){
        if(simonSequence[counter] == "green"){
            // if current entry of array has a value of 'green' then call the green simon button handler
            greenPad();
        } else if(simonSequence[counter] == "red"){
            redPad();
        } else if(simonSequence[counter] == "yellow"){
            yellowPad();
        } else if(simonSequence[counter] == "blue"){
            bluePad();
        }
        counter++;
        // check if counter against the current level
        if(counter < parseInt(levelCounter.innerText)){
            // if counter is smaller than current level then keep playing simon pattern
            playPattern(counter);
        }else{
            // otherwise stop playing simon sequence and its the players turn
            playerTurn = true;
        }
    }, 1500);
}

// Game handler - if correct input increment level otherwise show a game over message
function checkInput(){
    if(parseInt(levelCounter.innerText) < 20){
        // if not level 20 then check if users input is correct
        if(playerInput.length == parseInt(levelCounter.innerText)){
            if(correctInput(simonSequence, playerInput) == true){
                //if correct then increment level by 1 and play another simon sequence
                levelCounter.innerText = formatVal(parseInt(levelCounter.innerText) + 1);
                playerTurn = false;
                playerInput = [];
                playPattern(0);
            }else{
                //if incorrect then display game over message and ask user to restart game
                gameOverlay.classList.remove("game-overlay-hidden");
                document.getElementById("game-overlay-message").innerText = `Game Over! Better Luck Next Time. Click 'Restart' to play again.`;
            }
        }
    } else if(playerInput.length == parseInt(levelCounter.innerText) && parseInt(levelCounter.innerText) == 20){
        // if play is on level 20, check if users input is correct
        if(correctInput(simonSequence, playerInput) == true){
            //if correct then display a well done message and tell player to restart if they wish to play again
            gameOverlay.classList.remove("game-overlay-hidden");
            document.getElementById("game-overlay-message").innerText = `Well Done! You Beat Simon. Click 'Restart' to play again.`;
        }else{
            //otherwise display a game over message
            gameOverlay.classList.remove("game-overlay-hidden");
            document.getElementById("game-overlay-message").innerText = `Game Over! You Were So Close! Click 'Restart' to play again.`;
        }
    }
}

// Check users input against simon sequence and return true if correct or return false if incorrect
function correctInput(simonSequence, userInput){
    for(var i=0; i<userInput.length; i++){
        // if any of the inputs is incorrect then return false
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
        // if isUnique returns false then keep generating another random colour until it returns true
        while(isUnique(simonSequence, seqCandidate) == false){
            seqCandidate = generatePattern();
        }
        // add colour to simon sequence
        simonSequence.push(seqCandidate);
    }
    // start first level of simon
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
    // generate a random number from 1 - 4 and use it to select a colour from the 'gameColours' array
    randomNum = Math.floor(Math.random() * 4) + 1;

    return gameColors[randomNum];
}

// Checks if last 3 entries of simon sequence are the same - enforces 3 same consecutive colour rule
function isUnique(sequence, testVal){
    var seqLength = sequence.length;
    // last 3 entries of simon sequence is checked to see if it's the same
    if(sequence[seqLength - 1] == testVal && sequence[seqLength - 2] == testVal &&  sequence[seqLength - 3] == testVal){
        // if last 3 entries are the same then return false
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
        // if in active game mode then add value of 'green' to 'playerInput' array and call checkInput function
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
  
