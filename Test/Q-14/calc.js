// Function to calculate multiplication
function multiply(a=10, b=20) {
        return a * b;
      }
      
      // Function to calculate division
      function divide(a, b) {
        if (b !== 0) {
          return a / b;
        }
         else
         {
          return "Cannot divide by zero!";
        }
      }
      
      // Example usage
      const num1 = parseFloat("Enter the first number:");
      const num2 = parseFloat("Enter the second number:");
      
      const resultMultiply = multiply(num1, num2);
      const resultDivide = divide(num1, num2);
      
      console.log(`Multiplication: ${resultMultiply}`);
      console.log(`Division: ${resultDivide}`);
      