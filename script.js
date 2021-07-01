function computerPlay () {
    const computerTurn = Math.random();
    console.log(computerTurn);
    if (computerTurn < 0.33) {
        alert("Rock");
        console.log("Rock");
        return "rock";
    }
    else {
        if (computerTurn < 0.67) {
            alert("Paper");
            console.log("Paper");
            return "paper";
        }
        else {
            alert("Scissors");
            console.log("Scissors");
            return "scissors";
        }
    }
}
function playRound(playerSelection, computerSelection) {
    let playerBet = clean(playerSelection);
    let computerBet;
    console.log(computerSelection);
    if (!computerSelection) {
        computerBet = clean(computerPlay ());
    }
    else {
        computerBet = clean(computerSelection);
    }
    while (playerBet == "error") {
        playerBet = prompt("Enter rock/paper/scissors:", "rock");
    }
    let roundResult = winner(playerBet, computerBet);
    console.log(roundResult);
    alert(roundResult);
    return roundResult;
}
function game() {
    let playerWins = 0;
    let computerWins = 0;
    let gameResult;
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Enter rock/paper/scissors:", "rock");
        let roundResult = playRound(playerSelection, computerPlay());
        if (roundResult.indexOf("Lose") == -1) {
            if (roundResult.indexOf("Won") == -1) {
            }
            else {
                playerWins++;
            }
        }
        else {
            computerWins++;
        }
        console.log(playerWins, computerWins);
    }
    if (playerWins > computerWins)
    {
        gameResult = `You won! ${playerWins} vs ${computerWins}`;
    }
    else if (playerWins == computerWins) {
        gameResult = `It's a Draw ${playerWins} vs ${computerWins}`;
    }
    else {
        gameResult = `You Lost! ${playerWins} vs ${computerWins}`;
    }

    console.log(gameResult);
    return gameResult;
}
function clean(input) {
    let cleaninput = input;
    cleaninput = cleaninput.toUpperCase();
    cleaninput = cleaninput.toLowerCase();
    cleaninput = cleaninput.trim();
    switch (cleaninput) {
        case "paper":
        case "rock":
        case "scissors":
            console.log(`input: ${cleaninput}`);
            return cleaninput;
        default:
            cleaninput = "error";
            console.log(`input: ${cleaninput}`);
            return cleaninput;
    }
}
function winner(playerBet, computerBet) {
    let roundResult = "Draw";
    console.log(playerBet, computerBet);
    switch (playerBet) {
        case "paper":
            switch (computerBet) {
                case "paper":
                    roundResult = `Draw: ${playerBet} equals ${computerBet}`;
                    console.log("ppd");
                    return roundResult;
                case "rock":
                    roundResult = `You Won! ${playerBet} beats ${computerBet}`;
                    console.log("prw");
                    return roundResult;
                case "scissors":
                    roundResult = `You Lose! ${computerBet} beats ${playerBet}`;
                    console.log("psl");
                    return roundResult;
            }
        case "rock":
            switch (computerBet) {
                case "paper":
                    roundResult = `You Lose! ${computerBet} beats ${playerBet}`;
                    console.log("rpl");
                    return roundResult;
                case "rock":
                    roundResult = `Draw: ${playerBet} equals ${computerBet}`;
                    console.log("rrd");
                    return roundResult;
                case "scissors":
                    roundResult = `You Won! ${playerBet} beats ${computerBet}`;
                    console.log("rsw");
                    return roundResult;
            }
        case "scissors":
            switch (computerBet) {
                case "paper":
                    roundResult = `You Won! ${playerBet} beats ${computerBet}`;
                    console.log("spw");
                    return roundResult;
                case "rock":
                    roundResult = `You Lose! ${computerBet} beats ${playerBet}`;
                    console.log("srl");
                    return roundResult;
                case "scissors":
                    roundResult = `Draw: ${playerBet} equals ${computerBet}`;
                    console.log("ssd");
                    return roundResult;
            }
    }
    console.log(roundResult);
    return roundResult;
}

//game();
//Copy from the JS30 Drumset

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

function playSound(e) {
    console.log(e);
    console.log(this);
    console.log(this.dataset.key);
    //const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    //if (!audio) return;
    this.classList.add("playing");
    let roundResult = playRound(this.dataset.key);
    console.log(roundResult);
    //audio.currentTime = 0;
    //audio.play();
    if (roundResult.indexOf("Lose") == -1) {
        if (roundResult.indexOf("Won") == -1) {
        }
        else {
            playerWins++;
        }
    }
    else {
        computerWins++;
    }
    
    if ((playerWins == 5) || (computerWins == 5)) {
        if (playerWins > computerWins)
        {
            gameResult = `You won! ${playerWins} vs ${computerWins}`;
        }
        else if (playerWins == computerWins) {
            gameResult = `It's a Draw ${playerWins} vs ${computerWins}`;
        }
        else {
            gameResult = `You Lost! ${playerWins} vs ${computerWins}`;
        }
        alert(gameResult);
        playerWins = 0;
        computerWins = 0;
    }
    console.log(playerWins, computerWins);
    document.querySelector("#scorecard").textContent = `${playerWins} : ${computerWins}`;

  }

let playerWins = 0;
let computerWins = 0;
let gameResult;

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("click", playSound));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));