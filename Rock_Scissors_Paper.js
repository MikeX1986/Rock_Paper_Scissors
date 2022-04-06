let playerScore = 0;
let comScore = 0;


function computerPlay() {
  let opt = ['rock','paper','scissors'];
  let rnd = Math.floor(Math.random()*3);
  return opt[rnd];
};

function playerPlay() {
  
  let playerChoice = prompt("Please pick one of :Rock,Paper,Scissors");
  let choice = " ";
  
      if(playerChoice.toLowerCase() == 'rock') {
        choice = 'rock';
      } else if(playerChoice.toLowerCase() == 'paper') {
        choice = 'paper'
      } else if(playerChoice.toLowerCase() == 'scissors') {
        choice = 'scissors'
      } else {
        alert("Please pick again");
        choice = playerPlay();
      }
  
return choice;
  
}


function singleRound () {
  
     let result = '';
     const playerSelection = playerPlay()
       const computerSelection = computerPlay()
  
    if(playerSelection === 'rock')  {
      
        if(computerSelection === 'scissors') { 
        result = `You win!${playerSelection} wins ${computerSelection}`;
        playerScore += 1;
      } else if (computerSelection ==='rock') {
        result = `Tie!!${playerSelection} ties to ${computerSelection}`;
      } else {  
        result = `You lose!${playerSelection} loses to ${computerSelection}`;
        comScore += 1;
      } 
      
  } else if(playerSelection === 'paper') {
    
        if(computerSelection === 'rock') {
        result = `You win!${playerSelection} wins ${computerSelection}`;
        playerScore += 1;
      } else if (computerSelection === 'paper') {
        result = `Tie!!${playerSelection} ties to ${computerSelection}`;
      } else {
        result = `You lose!${playerSelection} loses to ${computerSelection}`;
        comScore += 1;
              }
  } else {
    
        if(computerSelection === 'paper') {  
        result = `You win!${playerSelection} wins ${computerSelection}`;
        playerScore += 1;
      } else if (computerSelection === 'scissors') {
        result = `Tie!!${playerSelection} ties to ${computerSelection}`;
      } else {
        result = `You lose!${playerSelection} loses to ${computerSelection}`;
        comScore += 1;
        
      }
   }
  
        return result;
};




function game(playerSelection,computerSelection) {
  
  
let outcome = '';
 let playerScored = playerScore;
  let comScored = comScore;

  
for (let i= 0; i<5; i++) {  
  

  
console.log(singleRound(playerSelection,computerSelection))
console.log(playerScore,comScore)
  
}    
  if(playerScore  > comScore) {         
        outcome = `Player Wins! Score : ${playerScore} - ${comScore}`;
    } else if(playerScore == comScore) { 
        outcome = `It is a tie! Score : ${playerScore} - ${comScore}`;
    } else {
         outcome = `Com Wins! Score : ${playerScore} - ${comScore}`;        
    }  
return outcome;
}


console.log(game())























