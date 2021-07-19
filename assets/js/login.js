let submit = document.getElementById('submitButton');

submit.addEventListener("click", async function () {
    event.preventDefault();

    //getting values from the form fields.
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email, password);
    const user = {
        "email": email,
        "password": password
    }
    let validUser = await UserValidator.authenticateUser(user);
    console.log(validUser);

    //checking both user name and password is validated.
    if (validUser) {
        StorageManager.saveToStorage('LoggedInUser', email);
        alert("Successfully Logged in.");
        window.location.href = "display.html";
    } else {
        alert('Invalid email and password, Try again');
    }
});