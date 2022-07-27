// querySelectors for DOM Manipulation
const btn = document.querySelectorAll(".selection");
const computerChoice = document.querySelector('.computerChoice');
const userPoints = document.querySelector(".userPoints");
const compPoints = document.querySelector(".compPoints");

// initialize variables
let computerSelect;
let userSelect;
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

function winner(userSelect, computerSelect){
    if(userSelect == "ROCK"){
        if(computerSelect == "ROCK"){
            console.log("TIE");
        }
        else if(computerSelect == "PAPER"){
            console.log("LOSE");
        }
        else if(computerSelect == "SCISSORS"){
            console.log("WIN");
        }
    }

    else if(userSelect == "PAPER"){
        if(computerSelect == "ROCK"){
            console.log("WIN");
        }
        else if(computerSelect == "PAPER"){
            console.log("TIE");
        }
        else if(computerSelect == "SCISSORS"){
            console.log("LOSE");
        }
    }

    else if(userSelect == "SCISSORS"){
        if(computerSelect == "ROCK"){
            console.log("LOSE");
        }
        else if(computerSelect == "PAPER"){
            console.log("WIN");
        }
        else if(computerSelect == "SCISSORS"){
            console.log("TIE");
        }
    }
    
    // move this out of function? 
    // compPoints.textContent = `${computerScore}`;
    // userPoints.textContent = `${userScore}`;
}