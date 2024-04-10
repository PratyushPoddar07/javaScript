function displayMessage() {
    const userInput = document.getElementById('userInput').value;
    const messageDisplay = document.getElementById('messageDisplay');
    
    // Update the message display with the user input
    messageDisplay.textContent = userInput;
  }
  