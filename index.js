function userChoice(choice) {
    // Generate computer choice
    var computerChoice = generateComputerChoice();
  
    // Determine the winner
    var result = determineWinner(choice, computerChoice);
  
    // Display the result
    document.getElementById('result').innerText = "You chose: " + choice.toUpperCase() + "\nComputer chose: " + computerChoice.toUpperCase() + "\n" + result;
  }
  
  // Function to generate computer's choice

  function generateComputerChoice() 
  {
    var choices = ['s', 'w', 'g'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];

  }
  
  // Function to determine the winner
  function determineWinner(user, computer) {
    if (user === computer) {
      return "It's a tie!";
    } else if ((user === 's' && computer === 'w') ||
               (user === 'w' && computer === 'g') ||
               (user === 'g' && computer === 's')) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  
  