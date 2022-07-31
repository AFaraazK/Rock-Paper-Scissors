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
        // get user and computer throws
        userSelect = e.target.id;
        computerSelect = computerThrows();

        // replace computerChoice .textContent
        if(computerSelect == 'ROCK'){
            computerChoice.textContent = '✊';
        } else if (computerSelect == "PAPER"){
            computerChoice.textContent = '✋';
        } else if (computerSelect == "SCISSORS"){
            computerChoice.textContent = '✌️';
        }

        winner(userSelect,computerSelect);

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


// Win-Loss Logic
function winner(userSelect, computerSelect){
    if(userSelect == "ROCK"){
        if(computerSelect == "ROCK"){
            resultText.textContent = 'Tie';
        }
        else if(computerSelect == "PAPER"){
            resultText.textContent = 'Loss';
            computerScore++;
        }
        else if(computerSelect == "SCISSORS"){
            resultText.textContent = 'Win!';
            userScore++;
        }
    }
    else if(userSelect == "PAPER"){
        if(computerSelect == "ROCK"){
            resultText.textContent = 'Win!';
            userScore++;
        }
        else if(computerSelect == "PAPER"){
            resultText.textContent = 'Tie';
        }
        else if(computerSelect == "SCISSORS"){
            resultText.textContent = 'Loss';
            computerScore++;
        }
    }
    else if(userSelect == "SCISSORS"){
        if(computerSelect == "ROCK"){
            resultText.textContent = 'Loss';
            computerScore++;
        }
        else if(computerSelect == "PAPER"){
            resultText.textContent = 'Win!';
            userScore++;
        }
        else if(computerSelect == "SCISSORS"){
            resultText.textContent = 'Tie';
        }
    }    
}