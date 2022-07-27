
// returns an array of html, so need to loop through and add to each
const btn = document.querySelectorAll(".selection");
const computerChoice = document.querySelector('.computerChoice');
let computerSelect;
let userSelect;

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