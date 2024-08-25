document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username === "Admin" && password === "admin123@gotravel") {
      window.location.href =  "admin.html";
    } else {
      errorMessage.textContent = "Invalid credentials. Please try again.";
    }
  })