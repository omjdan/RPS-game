const compChoiceDis = document.getElementById('compu_choice');
const userChoiceDis = document.getElementById('user_choice');
const resultDis = document.getElementById('result');
const possible = document.querySelectorAll('button');
const pScoreDis = document.getElementById('pscore');
const cScoreDis = document.getElementById('cscore');

let userChoice;

possible.forEach(btn => btn.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDis.innerText = userChoice;

computerPlay();
getResult();
counter();
}
))

let computerChoice;

function computerPlay(){
const randomNum = Math.floor(Math.random() * possible.length);

if (randomNum === 0){
 computerChoice = 'rock';
}else if(randomNum === 1){
 computerChoice = 'paper';
} else {computerChoice = 'scissors';
}
compChoiceDis.innerText = computerChoice;

}
let result;

function getResult(){
if (computerChoice === userChoice){
result = "Its a draw!"; 
}else if(computerChoice === 'rock' && userChoice === 'paper'){
result = "You win";
}else if (computerChoice === 'paper' && userChoice === 'scissors'){
result = "You win";
}else if (computerChoice === 'scissors' && userChoice === 'rock'){
    result = "You win";
    }else {
        result = "You loose";
    }


 resultDis.innerText = result;
}
    

    let pScore = 0;
    let cScore = 0;

function counter(){
    
if (result === "You win"){
     pScore++;
}else if (result === "You loose"){
    cScore++;
}


pScoreDis.textContent = pScore.toString();
cScoreDis.innerText = cScore.toString();
if (pScore === 10){

alert("Game Over You Win!");
 
//document.createElement('div',"Game Over You Win!");

// fade out all elements + animation of game over you win. retry button.
}else if (cScore === 10){
//document.createElement('div',"Game Over You loose!")
alert("Game over you loose");
}
}




console.log(pScore);
console.log(cScore);


