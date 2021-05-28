class PasswordValidator {
    /**
     * This function validates the password with a regular expression. It returns true or false based on validation result.
     * @param {string} passWord 
     */
    static validatePassword(passWord) {
        //Regular expression for pattern matching only 8-15 characters allowed with atleast one lowercase letter and one uppercase letter.
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        //password field should not be empty.
        if (passWord == null || passWord == "") {
            alert("password field should be filled.");
            return false;
        }

        //password should match the given condition.
        if (!(passWord.match(passwordRegex))) {
            alert("Password must contain atleast 8 to 15 characters, at least one lowercase letter, one uppercase letter, one numeric digit, and one special character")
            return false;
        }
        return true;
    }
}