
function submitButton() {
    var form = document.getElementById("myForm");
    var submitBtn = document.getElementById("submitBtn");

    submitBtn.disabled = !form.checkValidity();
}

function validateForm() {
    
    document.getElementsByClassName("error").innerText = "";

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var isValid = true;

    if (firstName.length < 3 || firstName.length > 6) {
        document.getElementById("firstNameError").innerText = "First Name must be equal 3 or less than or equal 6 characters.";
        isValid = false;
    }

    if (lastName.length < 3 || lastName.length > 6) {
        document.getElementById("lastNameError").innerText = "Last Name must be equal 3 or less than or equal 6 characters.";
        isValid = false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        document.getElementById("emailError").innerText = "Invalid Email.";
        isValid = false;
    }

    var phoneRegex = /^(011|012|015|010)\d{8}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone Number must be 11 digits and start with 011, 012, 015, or 010.";
        isValid = false;
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, contain a special character, an uppercase letter, and a digit.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        console.log("created account Successfully");
    } else {
        console.log("account contain errors.");
    }
}