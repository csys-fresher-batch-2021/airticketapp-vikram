let submit = document.getElementById('submitButton');

submit.addEventListener("click", function () {
    event.preventDefault();

    //getting values from the form fields.
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email, password);
    let validUser = UserValidator.authenticateUser(email, password);
    console.log(validUser);

    //checking both user name and password is validated.
    if (validUser) { //checking whether the username is registered or not.
        StorageManager.saveToStorage('LoggedInUser', email);
        alert("Successfully Logged in.");
        window.location.href = "display.html";
    } else {
        alert('Invalid email and password, Try again');
    }
});