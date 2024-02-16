function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Username validation
    if (username.length < 5) {
      alert("Username must be at least 5 characters long.");
      return false;
    }
  
    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Password validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }
  
    // If all validations pass
    alert("Form submitted successfully!");
    return true;
  }