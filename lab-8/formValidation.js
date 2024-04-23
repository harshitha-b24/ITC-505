document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (firstName == "" || lastName == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields must be filled out");
        event.preventDefault();
        return;
    }

    var emailPattern = /^[^\s@]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format. Email must end with @gmail.com");
        event.preventDefault();
        return;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        event.preventDefault();
        return;
    }

    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = "Registration Successful";
    messageDiv.style.display = "block"; // Show the message
    event.preventDefault(); // Prevent form submission for this example
});
