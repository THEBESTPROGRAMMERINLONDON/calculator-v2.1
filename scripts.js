let currentInput = '0'; // The current value displayed

// Function to append numbers to the display
function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  document.getElementById('display').value = currentInput;
}

// Function to append operators (+, -, *, /) to the display
function appendOperator(operator) {
  if (currentInput !== '0') {
    currentInput += ` ${operator} `;
    document.getElementById('display').value = currentInput;
  }
}

// Function to clear the display
function clearDisplay() {
  currentInput = '0';
  document.getElementById('display').value = currentInput;
}

// Function to calculate the result
function calculateResult() {
  try {
    // Evaluate the expression using JavaScript's eval() function
    currentInput = eval(currentInput).toString();
    document.getElementById('display').value = currentInput;
  } catch (e) {
    document.getElementById('display').value = 'Error';
    currentInput = '0';
  }
}