// write a prompt to get the user's choice, then make sure it's converted to lowercase
const userChoiceRawString = prompt(`Your choice: rock, paper, or scissors?`,'');
const userChoice = userChoiceRawString.toLowerCase();

// set a variable that randomly generates rock, paper, or scissors
const choiceArray = ['rock','paper','scissors'];
const randomComputerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

// a function that checks the value selected to the randomly generates a winner
function runTheGame(userChoice, randomComputerChoice) {
  
    // check to see if it's a tie, print results to console and alert the user
    if ( userChoice == randomComputerChoice ) {
        alert(`it\'s a tie | both chose ${userChoice} `);
        console.log(`your choice: ${userChoice} | computer choice: ${randomComputerChoice}`);
      
    //check to see if the user choice is a winner, print results to console and alert the user
    } else if (userChoice == 'rock' && randomComputerChoice == 'scissors' || 
    userChoice == 'paper' && randomComputerChoice == 'rock' || 
    userChoice == 'scissors' && randomComputerChoice == 'paper') {
        alert(`you win -- your choice: ${userChoice} | computer choice: ${randomComputerChoice}`);
        console.log(`your choice: ${userChoice} | computer choice: ${randomComputerChoice}`);
    
    //check to see if the user choice is a loser, print results to console and alert the user
    } else if (userChoice == 'scissors' && randomComputerChoice == 'rock' || 
    userChoice == 'rock' && randomComputerChoice == 'paper' || 
    userChoice == 'paper' && randomComputerChoice == 'scissors') {
        alert(`you lose -- your choice: ${userChoice} | computer choice: ${randomComputerChoice}`);
        console.log(`your choice: ${userChoice} | computer choice: ${randomComputerChoice}`);
    
    //check to make sure the user inputed an answer and alert the user
    } else if (userChoice == null || userChoice == '') {
        alert('you didn\'t input an answer!');
    
    // finally add a losing a response and alert the user
    } else {
        alert(`you didn't actually choose an option...`);
    }
}

// invoke the function
runTheGame(userChoice, randomComputerChoice);


