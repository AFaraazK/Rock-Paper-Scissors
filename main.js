// querySelectors for DOM Manipulation
const btn = document.querySelectorAll(".selection");
const computerChoice = document.querySelector('.computerChoice');
const userPoints = document.querySelector(".userPoints");
const compPoints = document.querySelector(".compPoints");
const resultText = document.querySelector('.result-text');

// initialize variables
let computerSelect, userSelect;
let computerScore = 0;
let userScore = 0;

for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',e => {
        userSelect = e.target.id;
        // computerThrows()
        computerSelect = computerThrows();
        // replace computerChoice .textContent
        if(computerSelect == 'ROCK'){
            computerChoice.textContent = '✊';
        } else if (computerSelect == "PAPER"){
            computerChoice.textContent = '✋';
        } else if (computerSelect == "SCISSORS"){
            computerChoice.textContent = '✌️';
        }
        // winner()
        winner(userSelect,computerSelect);
        // alert(computerSelect);

        // update score total
        compPoints.textContent = `${computerScore}`;
        userPoints.textContent = `${userScore}`;
    })
}

function computerThrows(){
    // generate random num 1-3
    let rand = Math.floor((Math.random() * 3) + 1);
    // use switch statement to assign to throw
    switch(rand){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    }
}

/*
function winner(userSelect, computerSelect){
    if(userSelect == computerSelect){
    } else if(computerSelect == "ROCK"){
        if(userSelect == "PAPER"){
            userScore++;
        }
        else if(userScore == "SCISSORS"){
            computerScore++;
            console.log('Computer wins');
        }
    } else if(computerSelect == "PAPER"){
        if(userSelect == "SCISSORS"){
            userScore++;
        }
        else if(userScore == "ROCK"){
            computerScore++;
            console.log('Computer wins');
        }
    } else if(computerSelect == "SCISSORS"){
        if(userSelect == "ROCK"){
            userScore++;
        }
        else if(userScore == "PAPER"){
            computerScore++;
            console.log('Computer wins');
        }
    }

    compPoints.textContent = `${computerScore}`;
    userPoints.textContent = `${userScore}`;
}
*/

// Win-Loss Logic
function winner(userSelect, computerSelect){
    if(userSelect == "ROCK"){
        if(computerSelect == "ROCK"){
            console.log("TIE");
            resultText.textContent = 'Tie';
        }
        else if(computerSelect == "PAPER"){
            console.log("LOSE");
            resultText.textContent = 'Loss';
            computerScore++;
        }
        else if(computerSelect == "SCISSORS"){
            console.log("WIN");
            resultText.textContent = 'Win!';
            userScore++;
        }
    }
    else if(userSelect == "PAPER"){
        if(computerSelect == "ROCK"){
            console.log("WIN");
            resultText.textContent = 'Win!';
            userScore++;
        }
        else if(computerSelect == "PAPER"){
            console.log("TIE");
            resultText.textContent = 'Tie';
        }
        else if(computerSelect == "SCISSORS"){
            console.log("LOSE");
            resultText.textContent = 'Loss';
            computerScore++;
        }
    }
    else if(userSelect == "SCISSORS"){
        if(computerSelect == "ROCK"){
            console.log("LOSE");
            resultText.textContent = 'Loss';
            computerScore++;
        }
        else if(computerSelect == "PAPER"){
            console.log("WIN");
            resultText.textContent = 'Win!';
            userScore++;
        }
        else if(computerSelect == "SCISSORS"){
            console.log("TIE");
            resultText.textContent = 'Tie';
        }
    }    
}